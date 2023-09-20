import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Cards from "./components/cards/Cards";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Form from "./components/form/Form";
import { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  let EMAIL = "seba@gmail.com";
  let PASSWORD = "seba1234";

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      })
      .catch(() => {
        alert("¡No hay personajes con este ID!");
      });
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter((character) => {
      return character.id !== id;
    });
    setCharacters(charactersFiltered);
  };

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => { // evita que ponga directamente /home
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : ""}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
