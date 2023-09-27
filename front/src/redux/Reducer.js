import { ADD_FAV, GENDER, REMOVE_FAV, ORDER } from "./Actions-type";
const initialState ={
 
    myFavorites:[],
    allfavorites:[]
}

const Reduce = (state = initialState, action) => {
    switch (action.type){
        case ADD_FAV:
            return{
            ...state,
            myFavorites: [...state.myFavorites, action.payload],
            allfavorites: [...state.allfavorites, action.payload]
        };
        
        case REMOVE_FAV:
            return{
              ...state,
             myFavorites: state.myFavorites.filter(character => character.id != action.payload)
            }

              case GENDER:
                const filterByGender = [...state.allfavorites].filter((favorite)=>{
                    return character.gender === action.payload
                })
                return{
                    ...state, 
                    myFavorites:filterByGender
                }

               case ORDER:
                const favoritesOrdered = action.payload === 'A'
               ?[...state.allfavorites].sort((a, b)=> a.id- b.id)
                :[...state.allfavorites].sort((a, b)=> b.id -a.id);
                       
                return{
                    ...state,
                    myFavorites:favoritesOrdered
                }


        default:
            return{
            ...state,
            }     
    }    
}
export default Reduce;