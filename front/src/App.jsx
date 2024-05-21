/*styles*/
import './App.css'


/*cmponentes de render*/
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Form from './components/form/formi.jsx';
import Favorites from './components/favorites/Favorites';
import NotFound from './components/404notfound/NotFound';
import holagif from './components/form/styles/videos/hola.gif'
import LoginComponent from './components/form/styles/videos/Logincomponente';
/*dependencias*/
import axios from 'axios'

/*hooks*/
import {useState, useEffect} from 'react';
import { useLocation, Route, Routes, useNavigate} from 'react-router-dom';
import JuegoRick from './components/juegoRick/Juego';
import Musica from './components/musica/musica';
import { Auth0Provider } from '@auth0/auth0-react';

/*credentials*/
const domain ='dev-1dupes0rz3lqishv.us.auth0.com'
const clientId = 'FlMFUCezIETLwc98aDwdgQ33CtStaGz8'
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
    const apiUrl = `http://localhost:3001/rickandmorty/character/${id}`;
    axios(apiUrl)
      .then((response) => {
        const { data } = response;
        if (data.name) {
          if (!characters.some((character) => character.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            alert('Este personaje ya está en la lista.');
          }
        } else {
          alert('¡No hay personajes con este ID!');
        }
      })
      .catch((error) => {
        console.error('Error al buscar el personaje:', error);
        throw error;
      });
    }else{

  if(id.length < 3){
    alert('porfavor ingrese mas de 2️⃣ letras para 🔍 por nombre')
    return;
  }

  const searchResults = [];
  const searchPage = (url) => {
    axios(url)
      .then((response) => {
        const { data } = response;
        if (data.error) {
          alert( '¡No hay personajes con este Nombre!');
        } else {
          searchResults.push(...data.results);
          if (data.info.next) {
            // Si hay más páginas, realiza una nueva solicitud
            searchPage(data.info.next);
          } else {
            // Todos los resultados se han recopilado
            setCharacters(searchResults);
          }
        }
      })
      .catch((error) => {
        console.error('Error al buscar el personaje:', error);
        throw error;
      });
  };
  let apiUrl;
    apiUrl = `https://rickandmortyapi.com/api/character/?name=${id}`;
    searchPage(apiUrl);
  }
}

const limpiarHome = () =>{
  setCharacters([]);
}
const login = (userData) => {

  const { email, password } = userData;
  const URL = 'http://localhost:3001/rickandmorty/login/';
  axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
    const { access } = data;
    if (access) {
      navigate('/home');
    } else {
    }
  });
};


const handleCardClick = async (id) => {
  try {
    const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
    const { data } = response;

    setdetalles(data);
    setPersonaje(true);
  } catch (error) {
    console.error('Error al obtener detalles del personaje:', error);
  }
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
    
    // const login = (userData) => {
    //   if (userData.password === USER_PASSWORD && userData.email === USER_EMAIL) {
    //     setAccess(true);
    //     navigate('/home'); // Usamos la constante navigate aquí
    //   }
  //   function login(userData) {
  //     const { email, password } = userData;
  //     const URL = 'http://localhost:3001/rickandmorty/login/';
  //     axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
  //        const { access } = data;
  //        setAccess(data);
  //        access && navigate('/home');
  //     });
  //  }  
  
    
const [mostrarAcerca, setMostrarAcerca] = useState(false);
const mostrarAbout = ()=>{
  setMostrarAcerca(!mostrarAcerca);
}

const [randomCharacter, setRandomCharacter]= useState(null); 

return (
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}>
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
      <Route path='/Favorites' element={<Favorites Cards={Cards}/>}/>
      <Route path='Music' element = {<Musica/>}/>
      <Route path ='/Game' element ={<JuegoRick/>}/>
      <Route path='*' Component={<NotFound/>}/>
  
    </Routes>
    

      </div>
      </div>
      </Auth0Provider>
  )
  } 
  
export default App;
