import {createStore, applyMiddleware, compose} from "redux";
import thunkmiddleware from "redux-thunk";
import  reducer  from "./Reducer"

  const composeEnhancer=
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
   compose;

  const Store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkmiddleware))

);

export default Store;
// import { createStore } from 'redux'
// import Reduce from './Reducer';

// const Store = createStore(Reduce)

// export default Store;