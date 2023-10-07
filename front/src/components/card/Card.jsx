import {Link} from "react-router-dom";
import {useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";
import Detail from "../detail/Detail";
import "./Card.css"


const Card =({ onClose, character, onCardClick}  ) => {
console.log(character)

   const dispatch = useDispatch();
const[detalles, setDetalles] = useState(false);

const handleCardClick=()=>{
   setDetalles(true)
}
const handleOverlayClick = ()=>{
   setDetalles(!detalles);
}

const myFavorites = useSelector((state) => state.myFavorites)
   const [isFav, setIsFav] = useState (false);
  const handleFavorite = () => {
   if(isFav){
      setIsFav(false)
      dispatch(removeFavorite(character.id))
   } else {
      setIsFav(true)
      dispatch(addFavorite({character}))
   }

}



const imagen= (character)=>{
  return(character.image)
}
const handleClick =(event)=>{
   event.preventDefault();
   onCardClick(character.id)
}
   useEffect(()=>{
      myFavorites?.forEach(fav => {
         if(fav.id === character.id) {
            setIsFav(true)
         }
      });
   }, [myFavorites])
   
   
  
   return (
      
      
      <div  style={{
         backgroundColor: "white",
         width: "110%",
         border: "15px solid transparent" , // Borde izquierdo
         borderImageSource: "linear-gradient(90de, transparent, #00ffff)",
         borderImageSlice:"1",
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
          <button onClick={() => {onClose(character.id)}}>X</button>
          <hr  style={{ 
  borderStyle: "none", 
  height: "1px", 
  color: "#f00", /* color rojo */
  backgroundImage: "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1), rgba(255,0,0,0))" 
}} ></hr>
           
       <div  className="card"  onClick={ handleClick}>
         <div onClick={handleCardClick}> 

         <h2>{character?.name}</h2>
         <img className="cartaJpg" src={character?.image} alt = {character?.name} /> 
         </div>
         <hr style={{ 
   border: "none", 
   height: "3px", 
   transition:"translateY()",
   marginTop:"30px",
   backgroundImage: "radial-gradient(circle, neongreen, yellow), "
}} />
         {detalles &&(
            <div onClick={handleOverlayClick} style={{ position: 'fixed', top: '50%', left: '50%', right: 0,width:'40%', height:'90%', bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', transform:"translate(-50%, -50%)", overflow:"auto", border:" 4px solid black"}}>
        <div className="background">
         <div className="nombredetalle">
          <p>name: {character?.name}</p>
         </div>
         <img style={{borderStyle:"outset; border-width: 5px", borderRadius:"100%", borderInlineColor:"Highlight 10px", border:"10px solid #00ffff"}} src={character.image} alt = {character.name} /> 
         <div className="carta">
          <p ><b>especie: </b>{character?.species.toString()}</p>
           <p><b>Estado: </b> {character?.status.toString()}</p>
           <p><b>Origen: </b> {character?.origin.name.toString()}</p>
           <p><b>genero: </b> {character?.gender.toString()}</p>
           <p><b>ubicacion: </b>{character.location.name.toString()}</p>
         </div>
         </div>
         </div>
       
           
               
               )}
                  {/* <a href="#">
         <span></span>
         <span></span>
         <span></span>
         <span></span>
      </a> */}
      </div>
   
      </div>
     
  
      </div>
   );
}

export default Card;