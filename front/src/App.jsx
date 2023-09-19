import { Route, Routes } from "react-router-dom"
import './App.css'
import Cards from "./components/cards/Cards"
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Detail from './components/detail/Detail'
import { useState } from 'react';
import axios from "axios"

function App() {
  const [characters, setCharacters] = useState([])

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
      })
      .catch(() =>{
        alert('¡No hay personajes con este ID!');
      })
  }

  const onClose = (id) => {
    const charactersFiltered = characters.filter((character) => {
      return character.id !== id
    })
    setCharacters(charactersFiltered)
  }

  return (
    <div className='App'>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
