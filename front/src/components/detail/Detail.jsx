import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Detail = ({character})=>{
  if (!character) return null;
    const params =useParams();
    const [characters, setCharacters] = useState({});
    useEffect(()=> {
        axios(`http://localhost:3001/rickandmorty/character/${params?.id}`)
        .then(({ data }) => {
          if (data.name) {
           setCharacters(data);
         } else {
           alert('No hay personajes con ese ID');
      }

   })
   .catch ((error)=> {
    console.log('se rompio', error);
   })
  
   return setCharacters({});

    },[params?.id])

    return(
        <div>
         <h2>{characters?.name}</h2>
          
         {characters.image && <img  src={characters.image} alt ={characters.name} />}
         <p>Specie: {characters?.species}</p> 
          <p>Estado: {characters?.status }</p>   
         <p>Origen: {characters?.origin?.name}</p>   
         <p>Genero: {characters?.gender}</p>   
         
       
        </div>
    )
}


export default Detail;