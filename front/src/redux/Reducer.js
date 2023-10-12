// import { ADD_FAV, GENDER, REMOVE_FAV, ORDER, REMOVE_CAR, ADD_CAR } from "./Actions-type";
// const initialState ={
//     myCar:[],
//     allCar:{},
//     myFavorites:[],
//     allfavorites:{}
// }

// const Reduce = (state = initialState, action) => {
//     switch (action.type){

//         case ADD_CAR:
//             return{
//             ...state,
//             myCar: [...state.myCar, action.payload],
//             allCar: [state.allCar, action.payload]
            
//         };
    
//         case REMOVE_CAR:
//             return{
//               ...state,
//              myCar: state.myCar.filter((character) => character.id != action.payload)
//             }

//         case ADD_FAV:
//             return { ...state, 
//                 myFavorites: payload, 
//                 allfavorites: payload };
        
    
//                 case REMOVE_FAV:
//                     return { ...state, 
//                         myFavorites: payload };

//               case GENDER:
//                 const filterByGender = [...state.allfavorites].filter((favorite)=>{
//                     return character.gender === action.payload
//                 })
//                 return{
//                     ...state, 
//                     myFavorites:filterByGender
//                 }

//                case ORDER:
//                 const favoritesOrdered = action.payload === 'A'
//                ?[...state.allfavorites].sort((a, b)=> a.id- b.id)
//                 :[...state.allfavorites].sort((a, b)=> b.id -a.id);
                       
//                 return{
//                     ...state,
//                     myFavorites:favoritesOrdered
//                 }


//         default:
//             return{
//             ...state,
//             }     
//     }    
// }
// export default Reduce;
import { 
    ADD_FAV, 
    REMOVE_FAV,
    GENDER,
    ORDER
} from "./action-types"

const initialState = {
    myFavorites: [],
    allFavorites: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allFavorites, action.payload],
                allFavorites: [...state.allFavorites, action.payload],
            }

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(({id}) => {
            console.log(id)
                    return id !== action.payload
                
                })
            }

        case GENDER:
            const filterByGender = [...state.allFavorites].filter((favorite) => favorite.gender === action.payload);

            return {
                ...state,
                myFavorites: filterByGender
            }

        case ORDER:
            const favoritesOrdered = action.payload === 'Ascendente'
            ? [...state.myFavorites].sort((a, b) => a.id - b.id)
            : [...state.myFavorites].sort((a, b) => b.id - a.id);

            return {
                ...state,
                myFavorites: favoritesOrdered
            }

        default:
            return {
                ...state
            }
    }
}

export default reducer;