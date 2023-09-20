import { useState } from "react";

const SearchBar = ({onSearch}) => {
   
   const [id, setId] = useState ("")

   const handleChange = (event) =>{
      setId (event.target.value)
} 
const handleSearch = () =>{
   onSearch(id)
   setId("")
}
const handleEnter = (event) =>{
   if (event.keycode == 13) return onSearch(id);
}
 return (
      <div>
          <input type='search' onChange={handleChange} value = {id} onKeyDown={handleEnter}/>
         <button onClick={() => handleSearch(id)}>Agregar</button> 
      </div>
   );
}

export default SearchBar;