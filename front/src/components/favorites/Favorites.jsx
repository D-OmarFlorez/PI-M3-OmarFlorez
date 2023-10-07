import { useSelector, useDispatch } from "react-redux"
import Card from "../card/Card";
import Reduce from "../../redux/Reducer";

const Favorites =({image, id, name }, state)=>{
    const favoritos = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch()
  console.log(state.myFavorites);
 const handleChange= (event)=>{
    if(event.target.name === 'filter'){
        dispatch(filterCards(event.target.value));
    }else{
        dispatch(Reduce)
    }
 }
  return(
    <div>

        <Card
            key= {id}
            id={id}
            name={name}
            image = {image}       
        />

        <select type={handleChange}/>
        
            
        <select name = "id">
             <option value ='A'/>
             <option value ='B'/>
            </select>
        <select >
            <option value='male'>male</option>
            <option value='male'>male</option>
            <option value='male'>male</option>
            <option value='male'>male</option>
        </select>
        
</div>
  )
}


export default Favorites