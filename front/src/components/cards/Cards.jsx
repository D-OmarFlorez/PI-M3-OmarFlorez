import Card from "../card/Card";


const Cards = ({ characters, onClose, onCardClick}) => {
   return(
      
      <div>
        
         {characters?.map(({id, name, image})=>{
            return (
            <Card
               key={id}
               id ={id}
               name ={name}
               image = {image}
               onClose={onClose}
               onCardClick={onCardClick}
               
            />
            
            
            )
         }
      )}
      
      </div>
   )
}

export default Cards;