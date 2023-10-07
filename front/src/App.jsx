/*styles*/
import './App.css'


/*cmponentes de render*/
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';
import NotFound from './components/404notfound/NotFound';
import holagif from './components/form/styles/videos/hola.gif'
import LoginComponent from './components/form/styles/videos/Logincomponente';
/*dependencias*/
import axios from 'axios'

/*hooks*/
import {useState, useEffect} from 'react';
import { useLocation, Route, Routes, useNavigate} from 'react-router-dom';
import Aleatorio from './components/citas/Citas';

/*credentials*/
const USER_EMAIL = 'hola@gmail.com'
const USER_PASSWORD = '1234asdf'

const App = () => {

  const [detalles, setdetalles] = useState (false);
  const [personaje, setPersonaje] = useState (null);
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation();

// const [carrito, setCarrito]= useState([]);
// setCarrito([...carrito, characters])

  const onSearch = (id) => {
 
   if(!isNaN(id)){
    // axios(`http://localhost:3001/rickandmorty/character/${id}`)
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      if (data.name) {
    
        if (!characters.some(character => character.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        
        }else if(data.results){
          setCharacters(data.results)
        
        } else {
          alert('Este personaje ya está en la lista.');
        }
      } 
    })
    .catch((error) => {
      alert('¡No hay personajes con este ID!', error);
    });
 }
else{
  axios(`https://rickandmortyapi.com/api/character/?name = ${id}`)
//   axios(`http://localhost:3001/rickandmorty/character/?name=${id}`)
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
  // axios(`https://rickandmortyapi.com/api/character/${id}`)
  axios(`http://localhost:3001/rickandmorty/character/${id}`)
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
   
    const [access, setAccess]= useState(false);
   
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
    
const [mostrarAcerca, setMostrarAcerca] = useState(false);
const mostrarAbout = ()=>{
  setMostrarAcerca(!mostrarAcerca);
}

const [randomCharacter, setRandomCharacter]= useState(null); 

return (
  <div>
   {/* <LoginComponent BackgroundImage='https://i.pinimg.com/originals/34/ac/0e/34ac0efa00a8507bf9c231866c3bdc81.jpg' /> */}
   <LoginComponent BackgroundImage={holagif}/>
   <div className='App' >

    {pathname === "/" || pathname !=='*' &&(
    // {/* {pathname === '/home' || pathname === '/Detail'|| pathname==='Favorites' || pathname === 'About' || ( */}
      <Nav onSearch = {onSearch} setAccess={setAccess} limpiarHome={limpiarHome} setRandomCharacter={setRandomCharacter} /> 
    )} 
    
    <Routes>

      <Route path='/home' element = {<Cards characters = {characters} onCardClick={handleCardClick}
      onClose={onClose} />}/>
      <Route path ='/About' element ={<About/>}/>
      <Route path ='/Detail/:id' element ={<Detail character={detalles} onClose= {handleClose}/>}/>
      <Route path='/' element={<Form login={login}/>}/>    
      <Route path='/Favorites' element={<Favorites/>}/>
      <Route path='*' Component={NotFound}/>
  
    </Routes>
    

      </div>
      </div>
      
  )
  } 
  
console.log(NotFound);
export default App;
