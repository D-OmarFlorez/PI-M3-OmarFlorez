import SearchBar from "../SearchBar";
import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BotonEstilo from "./botones/Botones";
import axios from "axios";

const Nav =({onSearch, limpiarHome, setRandomCharacter, mostrarAbout}) =>{
  const [confirm, setConfirm] = useState(false);
  const [randomCharacter, setRandomCharacterState] = useState(null);
  const navigate = useNavigate();
  const Logout = ()=>{
      console.log('logout realizado')
    navigate('/');
  }
  const logoutClick = ()=> {
    setConfirm(true);
  }
  const salirConfirm = ( )=> {
    setConfirm(false);
  }
  
  const random = ()=>
  {
     const randomId = Math.floor(Math.random()* 826)
     axios(`https://rickandmortyapi.com/api/character/${randomId}`)
        .then(({data})=>{
          if (data.name){
          setRandomCharacterState(data)
        }
        })
        .catch((error)=>{
          console.error('error encontrando personaje aleatorio', error);
        })
    }

  const estilocuadro = {
    backgroundColor: 'white',
    fontSize: '13px',
    alignContent:'left',
    color: 'black',
    width: '80%',
    padding: '10px',
    border: '5px solid purple',
    borderRadius: '10px',
    transition: 'border-color 0.3s ease',
  }


   return(
  <div className=" estiloPrincipal">
    <nav>
      <Link to='/About'>
        <button onClick={mostrarAbout}>about</button>
      </Link>
      
      <Link to='/Favorites'>
        <button>
          favoritos
        </button>
      </Link>

      <Link to='/home'>
        <button>
            home
        </button>
      </Link>
      
      <button onClick={logoutClick}>
            logout
        </button>
        {confirm && (
      <div style={estilocuadro}><p>
        !estas seguro que quieres salir?
        </p>
        <button onClick={Logout}>si</button>
        <button onClick={salirConfirm}>no</button>
        </div>
        )}

      <button onClick={random}>random</button>
      {/* {randomCharacter && (
  <div>
    <h2>{randomCharacter.name}</h2>
    <img src={randomCharacter.image} alt={randomCharacter.name} />
  </div>
)}   */}
      <button onClick={limpiarHome}>Limpiar Todo</button>

      <link to = "/details">
        {/* <button>details</button> */}
      </link>
     
      <SearchBar  onSearch = {onSearch}/>
      <br/>
     
    </nav>
    <hr style={{ 
  borderStyle: "none", 
  height: "2px", 
  backgroundImage: "radial-gradient(center, red, orange , yellow, green, blue, indigo, violet)" 
}} /> 
    </div>
        )

}

export default Nav;