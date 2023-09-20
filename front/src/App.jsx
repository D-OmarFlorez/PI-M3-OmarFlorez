import './App.css'
// import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/nav/nav';
// import SearchBar from './components/SearchBar.jsx';
// import characters, { Rick } from './data.js';
import axios from 'axios'
import {useState} from 'react';
import About from './components/about/About';
import Detail from './components/detail/Detail';

const App = () => {
  const [characters, setCharacters] = useState([]);
  
  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({data}) => { 
         if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        
       }
    })
    .catch(() => {
      alert ('!no hay personajes con este ID')
    })
   
   }
    const onClose =(id) => {
      const characterFilter = characters.filter ((character) =>{
      character.id !== id
    })
      setCharacters(characterFilter) 
      
    
 }
  
  return (
   <div className='App'>
    <Nav onSearch = {onSearch}/> 
    <Cards characters = {characters} onClose={onClose}/>
    <routes>
      <route path='/home' elements = {<cards characters = {characters} 
      onClose={onClose}/>}/>
      <route path ='/about' element ={<about/>}/>
      <route path ='/detail/:id' element ={<detail/>}/>
    </routes>
    </div>
  )
  } 
export default App;
