import { Link } from "react-router-dom";
const Card = ({id, name, status, species, gender, origin, image, onClose }) => {
   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`} >
         <h3>Name: {name}</h3>
         </Link>
         <h3>Status: {status}</h3>
         <h3>Specie: {species}</h3>
         <h3>Gender: {gender}</h3>
         <h3>Origin: {origin}</h3>
         <img src={image} alt={name} /> 
      </div>
   );
}

export default Card