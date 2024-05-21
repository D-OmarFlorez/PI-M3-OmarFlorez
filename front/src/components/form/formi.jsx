import { useEffect, useState } from "react";
import validation from "../../Validation";
import LoginComponent from "./styles/videos/Logincomponente";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aleatorio from "../citas/Citas";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import ImagenHora from "./styles/videos/imagenes/Imagenhora";
import "./form.css"
import supernova from "./styles/videos/supernova.gif"
import Avatar from "./styles/avatars/Avatars";
import inter from "../nav/botones/inter.mp3"
import ricc from "./ricc.png"
import ReproductorDeAudio from "../audios/Audios";
import {useNavigate, useLocation} from 'react-router-dom'
import { CSSTransition } from "react-transition-group";
const USER_EMAIL = 'hola@gmail.com'
const USER_PASSWORD = '1234asdf'


const Form = ({login}) => {
const {pathname} = useLocation()
  const navigate = useNavigate()
  const[isHome, setIsHome]= useState(
    pathname === "/home"
  )
  const [actualizarAleatorio, setActualizarAleatorio] = useState(true);
  const handleActualizarAleatorio = () => {
     setActualizarAleatorio(false);
     setTimeout(()=>{
      setActualizarAleatorio(true);
     }, 10)
  };

  

  const [userData, setUserData] = useState({
    email: "", //llamar igual al name del input asi funciona el handleChange en []
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData, //copio mi estado actual
      [event.target.name]: event.target.value //igualo el estado name a mi input para controlar lo que el usuario escribe
    }); // [] no conozco el nombre exacto de la propiedad del objeto (email o password)
  };
    const validationTimeout = setTimeout(()=>{
      const validationErrors = validation(userData);
      setErrors(validationErrors)

      if(Object.keys(validationErrors).length===0){
        setUserData({
          email: userData.email,
          password: userData.password,
        });
        clearTimeout(validationTimeout);
      }
    },[10000] );
  
const [authError, setauthError] = useState(false);
  const handleSubmit = (event) =>{
    event.preventDefault()
    if (userData.email === USER_EMAIL && userData.password === USER_PASSWORD){
    login(userData)
  }else{
    setauthError ("contraseña o email invalidos")
  }
}

  const [mostrar, setMostrar] = useState(false)
  const vista = ()=>{
    setMostrar(!mostrar)
    
  }
  useEffect(()=>{
    setIsHome(pathname === "/home");
  }, [pathname]);

  const styleInput ={
    backgroundColor: '#2823bc',
    fontSize: '16px',
    alignContent:'center',
    width: '90%',
    padding: '10px',
    color:'white',
    position: "relative",
    boxSizing:"border-box",
    paddingleft:"30px",
    fontSize: '18px',
    border: '2px solid #ccc',
    borderRadius: '100px',
    transition: 'border-color 0.3s ease',
  }
  
  return (
    
    <div>
            <ReproductorDeAudio src={inter} autoPlay={true}  />   

      <h1>QUIERES SABER LOS DETALLES DE LOS PERSONAJES? LOGUEATE AQUI...</h1>
      <LoginComponent BackgroundImage='https://i.pinimg.com/originals/a1/97/0c/a1970c9c15a90ce9e6e55faf08c1c404.gif'>
        <div
        className={`overlay ${isHome? "ovelay-visible" : ""}`}>
        </div>
        </LoginComponent>   
       
   
      <div className="loginBox">
      <form onSubmit={handleSubmit}>
        
      <h2>logueate aqui</h2>
      
  
       <Avatar/> 

<hr style={{ 
  borderStyle: "none", 
  height: "2px", 
  backgroundImage: "linear-gradient(to right, red, orange , yellow, green, blue, indigo, violet)" 
}} />


      
        <div className="user-Box">
        <label htmlFor="email">Email: </label>
         
       <div style={styleInput}>
          <input 
              type="text" 
              name="email" 
              id= "email"
              value={userData.email} // value = estado
              // 'da' = 'da'
              onChange={handleChange}
          />
          </div>
    
          </div>
          {errors.email !== '' && <p style={{ color: 'red' }}>{errors.email}</p>}

          <hr style={{ 
  borderStyle: "none", 
  height: "1px", 
  color: "#f00", /* color rojo */
  backgroundImage: "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1), rgba(255,0,0,0))" 
}} />

         <div className="user-Box">
          <label htmlFor="password"> Password: </label>
          {/* <div> */}
          <div style={styleInput}>
          <input 
              type={mostrar ? "text" : "password"}
              name="password"
              id = "password" 
              value={userData.password}
              onChange={handleChange}
          />
          </div>
          </div> 
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            iniciar
          </a>
         <i onClick={vista} style={{
          position:"relative",
          bottom:"35px",
          left:'70px',
          padding: '0px', 
          cursor: 'pointer' 
         }}>
          {mostrar? <FontAwesomeIcon icon={faEyeSlash}/> : <FontAwesomeIcon icon={faEye}/>}
         </i>
          {errors.password !== '' && <p style={{ color: 'red' }}>{errors.password}</p>}

          <hr style={{ 
  borderStyle: "none", 
  height: "1px", 
  color: "#ff0", /* color rojo */
  backgroundImage: "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1), rgba(255,0,0,0))" 
}} />

          <button 
              type="submit"
              // disabled={!userData.email || !userData.password || errors.email || errors.password} 
          >Enviar</button>

          {authError && <p style={{ color: "red" }}>Correo o contraseña incorrectos</p>}

      </form>
      
      </div>
      
      <div  style={{
        position:"relative",
        float:"center",
        marginButtom:"0px",
        paddingTop:"40px",
        height:"200px",
        zIndex:""
      
       }}> 
        <p><b><i>imagen que cambia en funcion de la hora</i></b></p>

<button style={{
        color:"black",
        float:"left",
        position:"absolute",
        float:"left"
       }} 
       
       onClick={handleActualizarAleatorio}>nueva cita</button>
<ImagenHora style={{
        width: '100%',
        
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',

      }}
      images={{
       mañana: "https://i.pinimg.com/originals/f9/e2/50/f9e250c7924296d51d6851e79cb29da4.jpg",
       tarde:"https://i.pinimg.com/originals/9a/82/07/9a8207c4104147b540b4f3ff3ca11e7a.gif",
       noche:"https://i.pinimg.com/originals/1f/2e/c0/1f2ec0b7ead7fb98ac82bbd43f671693.gif",
       madrugada:"https://www.eluniversohoy.net/wp-content/uploads/2019/08/Jeff-Dai-Milky-way-and-Gegenschein-over-Ali-observatory_1566435082.jpg"
      }}/> 
       
       {actualizarAleatorio && <Aleatorio style={{
        position:"center",
        height:"200px",
        justifyContent:"center",
        alignItems:"center"
       }}>

       </Aleatorio>}
      
       </div>
       <div className={`gif-container ${isHome ? "gif-visible": ""}`}>
        <CSSTransition 
        key={isHome ? "home" : "not-home"} 
        in={isHome}
        timeout={3000}
        classNames="gif"
        unmountOnExit>
 {state => {
    console.log("Transition state:", state);
    return (
      <img src={supernova} alt="Transicion" className="gif" />
    );
  }}    
    </CSSTransition>
    </div><div className="videocon"
  >
   <div><h1>ahora disfruta de los resumenes de cada temporada de rick and morty<img style={{width:"5%", height:"5%"}} src={ricc}></img> </h1></div>
  <iframe width="560" className="youtube" height="315" src="https://www.youtube.com/embed/videoseries?si=NYO8lH1yUvfV6zSs&amp;list=PLGsUdKeMLVNVTJDAn8XSFaEatiMAHxdLA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>       

  </div>   
      </div>
        
     
    
  )
      }


export default Form;