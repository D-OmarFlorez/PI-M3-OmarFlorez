import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {

  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <h3>Name: {character?.name}</h3>
      <h3>Status: {character?.status}</h3>
      <h3>Species: {character?.species}</h3>
      <h3>Gender: {character?.gender}</h3>
      <h3>Origin: {character.origin?.name}</h3>
      <img src={character?.image} alt={character?.name} /> 
    </div>
  );
};

export default Detail;
