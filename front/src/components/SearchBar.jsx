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
   if (event.key === 'Enter') return onSearch(id);
}

 return (
      <div >
          <input style={{
            border: '3px solid #00ffff',
            borderRadius: '10px'
          }} type='search' onChange={handleChange} value = {id} onKeyDown={handleEnter}/>
         <button onClick={() => handleSearch(id)}>Agregar</button> 
      </div>
   );
}

export default SearchBar;