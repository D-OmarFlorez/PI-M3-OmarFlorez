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
// const resultados= onsearch.filter(item=>
//    item.name.toLowerCase().includes(ids.toLowerCase())
//    || item.id.toString()== ids)

 return (
      <div >
          <input style={{
            border: '3px solid #00ffff',
            borderRadius: '10px'
          }} type='search' onChange={handleChange} value = {id} onKeyDown={handleEnter}/>
         <button onClick={() => handleSearch(id)}>Agregar</button> 
         {/* {resultados.map(item =>(
            <div key={item.id}>
               <p>{item.name}</p>
            </div>
         ))} */}
      </div>
   );
}

export default SearchBar;