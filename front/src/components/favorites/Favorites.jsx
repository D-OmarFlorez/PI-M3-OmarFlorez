import { useSelector } from "react"

import Card from "../card/Card";
import { filterCards } from "../../redux/actions";

const Favorites =()=>{
    const myFavorites = useSelector((state) => state.myFavorites);
  
 const handleChange= (event)=>{
    if(event.target.name === 'filter'){
        dispatchEvent(filterCards(event.target.value));
    }else{
        dispatchEvent(ordercards)
    }
 }
  
  return(
    <div>
          {myFavorites.map(({name, image})=>{

           
        return(
            <Card
             key= {id}
             id={id}
             name={name}
             image = {image}   
         />
        )
    })} 
        <select onChange= {handleOrder}>
             <option value ='A'>Ascendente</option>
             <option value ='B'>Descendente</option>
            </select>
        <select onChange={handleFilter}>
            <option value='male'>Maculino</option>
            <option value='Female'>Femenino</option>
            <option value='Genderless'>Genero</option>
            <option value='unknown'>desconocido</option>
        </select>
</div>
  )
}

export default Favorites