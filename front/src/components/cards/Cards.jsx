import Card from "../card/Card";
import "./Cards.css"
// import {randomCharacter} from '../nav/Nav'
const Cards = ({ characters, onClose, onCardClick, randomCharacter}) => {
   characters = Array.isArray(characters) ? characters : [];
  
   const allCharacters  = [randomCharacter, ...characters];
   return(
      
      <div className="cabecera">
        
         {allCharacters?.map((character)=>{
           if (!character) return null;
           const key = character.id? character.id: `random-${index}`
            return(
               <div className="cuerpo" key={key}>
            <Card
               id= {character.id}
               name={character.name}
               image={character.image}
               character={character}
               onClose={onClose}
               onCardClick={onCardClick}
               
               
            />
            </div>
            
            )
         }
      )}
      
      </div>
   )
}

export default Cards;