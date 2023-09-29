import Card from "../card/Card";
import "./Cards.css"

const Cards = ({ characters, onClose, onCardClick}) => {
   
   return(
      
      <div className="cabecera">
        
         {characters?.map((character)=>{
            console.log(character);
            return(
               <div className="cuerpo">
            <Card
               key={character.id}
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