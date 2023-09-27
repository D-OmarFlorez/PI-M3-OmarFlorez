import {Link} from "react-router-dom";
import {useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";


const Card =({name, onClose, id, image, onCardClick}) => {
const dispatch = useDispatch();
const myFavorites = useSelector((state) => state.myfavorites)
   const [isFav, setIsFav] = useState (false);
  const handleFavorite = () => {
   if(isFav){
      setIsFav(false)
      dispatch(removeFavorite(id))
   } else {
      setIsFav(true)
      dispatch(addFavorite({name, onClose, id, image}))
   }

}

const handleClick =(event)=>{
   event.preventDefault();
   onCardClick(id)
}
   useEffect(()=>{
      myFavorites?.forEach(fav => {
         if(fav.id === id) {
            setIsFav(true)
         }
      });
   }, [myFavorites])
  
   return (

      <div style={{
         backgroundColor: "white",
         width: "110%",
         borderLeft: "15px #00ffff", // Borde izquierdo
         borderRight: "15px #00ffff", // Borde derecho
         borderTop: "5px solid #00ffff", // Borde superior
         borderBottom: "10px solid deep black",
         padding:"5px"
      }}>
         <div>
         
         
       {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
          <button onClick={() => {onClose(id)}}>X</button>
          <hr  style={{ 
  borderStyle: "none", 
  height: "1px", 
  color: "#f00", /* color rojo */
  backgroundImage: "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1), rgba(255,0,0,0))" 
}} ></hr>
           
       <div  className="card"  onClick={ handleClick}> 

         <h2>{name}</h2>
         <img style={{borderStyle:"outset; border-width: 5px" }} src={image} alt = {name} /> 
         
      </div>
      </div>
      </div>
   );
}
export default Card;