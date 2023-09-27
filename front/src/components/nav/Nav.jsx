import SearchBar from "../SearchBar";
import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BotonEstilo from "./botones/Botones";


const Nav =({onSearch} ) =>{
  const [confirm, setConfirm] = useState(false);

  const navigate = useNavigate();
  const Logout = ()=>{
    // if (window.confirm('seguro que quieres cerrar sesion?')){
      console.log('logout realizado')
    navigate('/');
  }
  const logoutClick = ()=> {
    setConfirm(true);
  }
  const salirConfirm = ( )=> {
    setConfirm(false);
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
  const estiloPrincipal ={
    display: 'flex',
    justifyContent: 'space-between'
  }

   return(
  <div style={estiloPrincipal}>
    <nav>
      <Link to='/about'>
        <button>about</button>
      </Link>
      
      {/* <link to='/favorites'>
        <button>
          favoritos
        </button>
      </link> */}

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
      <link to = "/details">
        {/* <button>details</button> */}
      </link>
     
      <SearchBar onSearch = {onSearch}/>
    </nav>
    </div>
    )

}

export default Nav;