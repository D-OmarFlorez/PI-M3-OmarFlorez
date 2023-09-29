/*styles*/
import './App.css'

/*cmponentes de render*/
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';

/*dependencias*/
import axios from 'axios'

/*hooks*/
import {useState, useEffect} from 'react';
import { useLocation, Route, Routes, useNavigate} from 'react-router-dom';

/*credentials*/
const USER_EMAIL = 'hola@gmail.com'
const USER_PASSWORD = '1234asdf'



const App = () => {

  const [detalles, setdetalles] = useState (false);
  const [personaje, setPersonaje] = useState (null);
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation();
  const onSearch = (id) => {
   
   if(!isNaN(id)){
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      if (data.name) {
    
        if (!characters.some(character => character.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert('Este personaje ya está en la lista.');
        }
      } 
    })
    .catch((error) => {
      alert('¡No hay personajes con este ID!', error);
    });
 }else{
  axios(`https://rickandmortyapi.com/api/character/?name=${id}`)
      .then(({ data }) => {
        if (data.results) {
          setCharacters(data.results);
        }
      })
      .catch((error) => {
        alert('¡No se encontraron personajes con este nombre!', error);
      });
  }
  }



const limpiarHome = () =>{
  setCharacters([]);
}
const handleCardClick =(id) =>{
  axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        setdetalles(data);
        setPersonaje(true);
      })
      .catch((error) => {
        console.error('Error fetching character details:', error);
      });
  };
  const handleClose = ()=>{
    setShowDetail(false);
    setSelectedCharacter(null);
  }

  // const onSearch = (id) => {
  //   axios(`https://rickandmortyapi.com/api/character/${id}`)
  //     .then(({data}) => { 
  //        if (data.name) {
  //         if (!characters.some(character => character.id ===  data.id)){
  //         setCharacters((oldChars) => [...oldChars, data]);
  //         }else{
  //           alert('este personage ya esta en la lista.');
  //         }
  //      }
  //   })
  //   .catch(() => {
  //     alert ('!no hay personajes con este ID')
  //   })}
   
    const [access, setAccess]= useState(false);
    // function login(userData){
    //   const navigate = useNavigate();
    //   if(userData.password === USER_PASSWORD && userData.email === USER_EMAIL){
    //      setAccess(true)
    //      navigate("/home")
    //   } 
    // }
    // const onClose =(id) => {
    //   const characterFilter = characters.filter ((character) =>{
    //   character.id !== id
    //   setCharacters(characterFilter) 
    // })}
    const onClose = (id) => {
      const characterFilter = characters.filter((character) => {
        return character.id !== id; // Filtrar personajes cuyo ID no coincida
      });
      setCharacters(characterFilter);
    }
    
       
    useEffect(()=>{
      !access && navigate("/")
    },[access]);
    
    const login = (userData) => {
      if (userData.password === USER_PASSWORD && userData.email === USER_EMAIL) {
        setAccess(true);
        navigate('/home'); // Usamos la constante navigate aquí
      }
    }
    
//  const login =(userData)=>{
 
//   if(userData.password === USER_PASSWORD && userData.email === USER_EMAIL){
//     setAccess(true);
//     navigate ('/home')
//   }
//  }

  return (
   <div className='App' >
    {pathname !== "/" && (
      <Nav onSearch = {onSearch} setAccess={setAccess} limpiarHome={limpiarHome}  /> 
    )} 
    
    <Routes>
      <Route path='/home' element = {<Cards characters = {characters} onCardClick={handleCardClick}
      onClose={onClose} />}/>
      <Route path ='/About' element ={<About/>}/>
      <Route path ='/Detail/:id' element ={<Detail character={detalles} onClose= {handleClose}/>}/>
      <Route path='/' element={<Form login={login}/>}/>    
      <Route path='/favorites' element={<Favorites/>}/>
    </Routes>
    </div>
  )
  } 
  

export default App;
