import SearchBar from "../SearchBar";
import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BotonEstilo from "./botones/Botones";
import axios from "axios";
import Cards from "../cards/Cards";
import ReproductorDeAudio from "../audios/Audios";
import evilmorty from "./botones/evilmorty.mp3"
import inter from './botones/inter.mp3'
const Nav =({onSearch, limpiarHome, mostrarAbout, }) =>{
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
  const musicas = [
    inter, evilmorty
  ]

  const random = async () => {
    try {
      const randomId = Math.floor(Math.random() * 826);
      const response = await axios(`https://rickandmortyapi.com/api/character/${randomId}`);
      const { data } = response;
  
      if (data.name) {
        setRandomCharacterState(data);
      }
    } catch (error) {
      console.error('Error al encontrar personaje:', error);
      throw new Error('Error al encontrar personaje');
    }
  };
  
  
  const estilocuadro = {
    backgroundColor: 'white',
    fontSize: '13px',
  
    color: 'black',
    width: '200px',
    paddingleLeft: '500px',
    border: '5px solid purple',
    borderRadius: '10px',
    transition: 'border-color 0.3s ease',
  }


   return(
  <div className=" estiloPrincipal">
      <ReproductorDeAudio src={evilmorty} autoPlay={true}  />
    <nav className="navbar">
      {/* <div className="left-buttons"> */}

      <Link to='/About'>
        <button onClick={mostrarAbout}>
          {/* <img className="imgn" src="https://i.pinimg.com/474x/f0/01/cc/f001cc0a0ebc16aa418d9b133582566e.jpg"></img> */}
          ❔Acerca</button>
      </Link>
      
      <Link to ='game'>
        <button>🎮Game</button>
      </Link>
      <Link to='/Favorites'>
        <button>
          ⭐favoritos
        </button>
      </Link>

      <Link to='/home'>
        <button>
            🏠Home
        </button>
      </Link>
      
      <button onClick={logoutClick}>
           LOGOUT💨
        </button>
        {confirm && (
        <div onClick={salirConfirm}  style={{borderRadius:"30px", position: 'fixed', top: '30%', left: '50%', right: 0,width:'50%', height:'20%', bottom: 0, backgroundColor: 'rgba(225,275,214,0.9)', transform:"translate(-50%, -50%)", overflow:"auto", border:" 4px solid black"}}>
        
        <p>
        !estas seguro que quieres salir?
        </p>
        <button onClick={Logout}>si</button>
        <button onClick={salirConfirm}>no</button>
        </div>)}
        {/* </div> */}
        {/* <div className="right-buttons"> */}
      <button  onClick={random}>RANDOM🔀</button>
          {randomCharacter &&(<Cards
            id= {character.id}
               name={character.name}
               image={character.image}
               character={character}
               onClose={onClose}
               onCardClick={onCardClick}
               
          />     
          )}
      {/* {randomCharacter && (
  <div>
    <h2>{randomCharacter.name}</h2>
    <img src={randomCharacter.image} alt={randomCharacter.name} />
  </div>
)}   */}
      <button onClick={limpiarHome}>❌ ALL</button>

      {/* <link to = "/details">
        <button>details</button>
      </link> */}

      <SearchBar  onSearch = {onSearch}/>
   
     
      {/* </div> */}
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