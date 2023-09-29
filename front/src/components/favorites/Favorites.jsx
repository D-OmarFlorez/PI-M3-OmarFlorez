import { useSelector, useDispatch } from "react-redux"
import Card from "../card/Card";


const Favorites =()=>{
    const favoritos = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch()

 const handleChange= (event)=>{
    if(event.target.name === 'filter'){
        dispatch(filterCards(event.target.value));
    }else{
        dispatch(Reduce)
    }
 }
 console.log(myFavorites)
  return(
    <div>
        <select type={handleChange}/>   
        return(
            <Card
             key= {id}
             id={id}
             name={name}
             image = {image}       
        />
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
        )
</div>
  )
}

export default Favorites