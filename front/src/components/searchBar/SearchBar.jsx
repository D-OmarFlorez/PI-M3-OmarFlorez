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

   return (
      <div>
          <input type='search' onChange={handleChange} value={id} placeholder='ID...'/>
         <button onClick={()=>handleSearch()}>Agregar</button> 
      {/* para pasar argumentos a un evento debo colocarle un cb
      el callback es para que no se llame automaticamente la función
      solo debe llamarse cuando uno aprete agregar, no antes */}
      </div>
   );
}
export default SearchBar
