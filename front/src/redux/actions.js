import { 
    ADD_FAV, 
    REMOVE_FAV,
    GENDER,
    ORDER
} from "./action-types"

export const addFavorite = (character) => {
    return { type: ADD_FAV, payload: character }
}

export const removeFavorite = (id) => {
    return { type: REMOVE_FAV, payload: id }
}

export const filterCards = (gender) => {
    return { type: GENDER, payload: gender }
}

export const orderCards = (order) => {
    return { type: ORDER, payload: order }
}











// import {ADD_FAV, REMOVE_FAV, GENDER, ORDER, ADD_CAR, REMOVE_CAR} from "./Actions-type"
// import axios from "axios"

//  export const addCar =(character)=>{
//     return {
//         type : ADD_CAR,
//         payload: character
//     }

//  }

// export const removeCar =(id)=>{
//     return {
//         type : REMOVE_CAR,
//         payload: id
//     }

//  }
//  export const addFavorite = (character)=> {
//         const endpoint = 'http://localhost:3001/rickandmorty/fav';
//         return (dispatch) => {
//            axios.post(endpoint, character).then(({ data }) => {
//               return dispatch({
//                  type: ADD_FAV,
//                  payload: data,
//               });
//            });
//         };
//      };
     
 

//      export const removeFavorite = (id) => {
//         const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//         return (dispatch) => {
//            axios.delete(endpoint).then(({ data }) => {
//               return dispatch({
//                  type: REMOVE_FAV,
//                  payload: data,
//            });
//            });
//         };
//      };
     
// export  const filterCards =(gender)=> {return {type: GENDER, payload:gender}};
// export const cards =(order)=>{return {type:ORDER, payload: order}};
