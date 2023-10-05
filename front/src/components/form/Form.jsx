import { useState } from "react";
import validation from "../../Validation";
import LoginComponent from "./styles/videos/Logincomponente";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aleatorio from "../citas/Citas";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import ImagenHora from "./styles/videos/imagenes/Imagenhora";
import "./form.css"
const USER_EMAIL = 'hola@gmail.com'
const USER_PASSWORD = '1234asdf'


const Form = ({login}) => {
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

    setErrors(validation(userData));
  };
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
    setMostrar(!mostrar);
  }


  const styleInput ={
    backgroundColor: '#2823bc',
    fontSize: '16px',
    alignContent:'center',
    width: '100%',
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
      
      <LoginComponent BackgroundImage='https://i.pinimg.com/originals/a1/97/0c/a1970c9c15a90ce9e6e55faf08c1c404.gif'/>
    
   
      <div className="loginBox">
        

      <div style={{
        border: '4px solid white',
        backgroundColor:'grey',
        fontFamily:"monospace",     
        color:"indigo"
      }}>logueate aqui😁👍
      </div>
    <img src="https://www.vhv.rs/dpng/f/421-4212939_rick-and-morty-portal-png.png" alt="avatar" style={{
  width: '50%',
  heigth:'50%',
  borderRadius: '100%'
}}></img>
        
<hr style={{ 
  borderStyle: "none", 
  height: "2px", 
  backgroundImage: "linear-gradient(to right, red, orange , yellow, green, blue, indigo, violet)" 
}} />


      <form onSubmit={handleSubmit}>
        <div className="user-Box">
          <label htmlFor="email">Email: </label>
          {/* <div style={{ */}
          <div style={styleInput}>
       
          <input style={{
            backgroundColor: "grey",
            color: "blue"
          }}
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
          <input style={{
            backgroundColor:"grey",
            fontfamily:'fuente',
            color: "blue"
          }}
              type={mostrar ? "text" : "password"}
              name="password"
              id = "password" 
              value={userData.password}
              onChange={handleChange}
          />
          </div>
          </div> 
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
        
        height:"200px",
        zIndex:""
      
       }}> 

<ImagenHora style={{
        width: '100%',
        
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',

      }}
      images={{
       mañana: "https://i.pinimg.com/originals/f9/e2/50/f9e250c7924296d51d6851e79cb29da4.jpg",
       tarde:"https://i.pinimg.com/564x/8c/bd/7b/8cbd7b3a02d1582540d1399ff8abc2b6.jpg",
       noche:"https://i.pinimg.com/474x/87/e2/68/87e2689051c7cb21cead6790bbdca480.jpg",
       madrugada:"https://www.eluniversohoy.net/wp-content/uploads/2019/08/Jeff-Dai-Milky-way-and-Gegenschein-over-Ali-observatory_1566435082.jpg"
      }}/> 
       <Aleatorio style={{
        position:"center",
        height:"200px",
        justifyContent:"center",
        alignItems:"center"
       }}/>
       
       </div>
      </div>
        
     
    
  )
}

export default Form;