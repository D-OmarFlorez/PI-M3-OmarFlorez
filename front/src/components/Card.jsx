import {Link} from "react-router-dom";
const Card =({name, status, species, gender, origin, image, onClose}) => {
   return (
      <div>
          <button onClick={() => {onClose(id)}}>X</button>
         <Link to='/detail/${id}'>
         <h2>{name}</h2>
         </Link>
        
         <img src={image} alt = {name} /> 
      </div>
   );
}

export default Card;