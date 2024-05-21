import { useSelector, useDispatch } from "react-redux";
import Cards from "../cards/Cards";
import { filterCards, orderCards } from "../../redux/actions";
import Select from "../select/Select";
import { useEffect, useState } from "react";
import './favorite.css'
import Card from "../card/Card";
import axios from 'axios'

const Favorites = () => {
    const [detalles, setDetalles] = useState(false);
    const dispatch = useDispatch();
    const character = useSelector((state)=> state.characters)
    const  myFavorites  = useSelector((state) => state.myFavorites);

    const handleChange = (event) => {
        if (event.target.name === 'filter') {
            dispatch(filterCards(event.target.value));
        } else {
            dispatch(orderCards(event.target.value));
        }
    };
    useEffect(()=>{
        console.log("mis favoritos", myFavorites);
    },[myFavorites])

    const handleCardClick = async (id) => {
        try {
            const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
            const { data } = response;

            setDetalles(data);
        } catch (error) {
            console.error('Error al obtener detalles del personaje:', error);
        }
    };

    const fetchCharacterDetails = async (id) => {
        try {
          const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
          const { data } = response;
          const character= data
          return character;
        } catch (error) {
          console.error('Error al obtener detalles del personaje:', error);
        }
      };

    const handleOverlayClick = () => {
        setDetalles(false);
    };

    return (
        <div>
            <Select
                name='order'
                options={['Ascendente', 'Descendente']}
                handleChange={handleChange}
            />
            <Select
                name='filter'
                options={['Male', 'Female', 'Genderless', 'unknown']}
                handleChange={handleChange}
            />
            <Cards
               
                characters = {character} onCardClick={handleCardClick} showCloseButton={false}
                
             > 
               </Cards>
            {detalles && (
                <div onClick={handleOverlayClick} style={{ position: 'fixed', top: '50%', left: '50%', right: 0, width: '40%', height: '91%', bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', transform: "translate(-50%, -50%)", overflow: "auto", border: "4px solid black" }}>
                    <div className="background">
                        <div className="nombredetalle">
                            <p>name: {detalles?.name}</p>
                        </div>
                        <img style={{ borderStyle: "outset; border-width: 5px", borderRadius: "100%", borderInlineColor: "Highlight 10px", border: "10px solid #00ffff" }} src={detalles.image} alt={detalles.name} />
                        <div className="carta">
                            <p><b>especie: </b>{detalles?.species.toString()}</p>
                            <p><b>Estado: </b> {detalles?.status.toString()}</p>
                            <p><b>Origen: </b> {detalles?.origin.name.toString()}</p>
                            <p><b>genero: </b> {detalles?.gender.toString()}</p>
                            <p><b>ubicacion: </b>{detalles.location.name.toString()}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Favorites;
