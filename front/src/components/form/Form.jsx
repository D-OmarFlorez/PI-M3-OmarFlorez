import { useState } from "react";
import validation from "../../Validation";
import LoginComponent from "./styles/Logincomponente";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
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
    <div >

      
      
      <LoginComponent/>
       
      <div style={{
        alignItems:'center',

        border: '10px solid white',
        borderImage:'linear-gradient(to top, lime, cyan, OrangeRed) 3',
        borderRadius:'10%',
        borderColor:'black',
        backgroundColor:"green",      
        paddingTop: '10px',
        paddingBottom: 'px',
        fontWeight:'bold ',
        width:"300px",
        backgroundImage:'url(https://i.pinimg.com/564x/22/99/7d/22997de0e5d4d4a1f2e6591b8656a646.jpg)',
        // https://steamuserimages-a.akamaihd.net/ugc/1770453485893246977/FA4026EBB255ACE569504E4EB81645214FDF1CE7/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true
        backgroundSize:'cover',
        backgroundPosition:'center',
        height:"540px",        
        placeItems:'center'
      }}>
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
          {errors.email !== '' && <p style={{ color: 'red' }}>{errors.email}</p>}

          <hr style={{ 
  borderStyle: "none", 
  height: "1px", 
  color: "#f00", /* color rojo */
  backgroundImage: "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1), rgba(255,0,0,0))" 
}} />

          
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
      </div>
   
    
  )
}

export default Form;