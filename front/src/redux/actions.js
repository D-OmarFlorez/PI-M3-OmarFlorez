import {ADD_FAV, REMOVE_FAV, GENDER, ORDER, ADD_CAR, REMOVE_CAR} from "./Actions-type"

 export const addCar =(character)=>{
    return {
        type : ADD_CAR,
        payload: character
    }

 }

export const removeCar =(id)=>{
    return {
        type : REMOVE_CAR,
        payload: id
    }

 }
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
export  const filterCards =(gender)=> {type: GENDER, payload=gender};
export const cards =(order)=> {type:ORDER, payload=order};
