import { useState } from 'react';

const SearchBar = ({onSearch}) =>{

   const [id, setId] = useState("")

   const handleChange = (event) =>{
      setId(event.target.value)
   }

   const handleSearch = () =>{
      onSearch(id)
      setId("")
   }

   const handleEnter = (event) => {
      if (event.keyCode == 13) return onSearch(id)

   }

   return (
      <div>
          <input type='search' onChange={handleChange} value={id} placeholder='ID...' onKeyDown={handleEnter}/>
         <button onClick={()=>handleSearch()}>Agregar</button> 
      {/* para pasar argumentos a un evento debo colocarle un cb
      el callback es para que no se llame automaticamente la función
      solo debe llamarse cuando uno aprete agregar, no antes */}
      </div>
   );
}
export default SearchBar
