import {ADD_FAV, REMOVE_FAV, GENDER, ORDER} from "./Actions-type"


 export const addFavorite = (character)=> {
    return {
        type : ADD_FAV,
        payload: character
    }
} 

 export const removeFavorite = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id,
    }

}
export  const filterCards =(gender)=> {type: GENDER, payload = gender};
export const cards =(order)=> {type:ORDER, payload = order};
