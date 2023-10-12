import React, { useState } from "react";
import "./about.css"

const About = () => {
  const [evento, setEvento] = useState(null);
  const [mostrarDiv, setMostrarDiv] = useState(false);

  const events = [
    {
      año: 2020,
      logros: " Certificado tecnico en C++ y java, ingenieria de sistemas, y Ciberseguridad",
      estado: " pobre XD, trabajando en la Hacienda de la Familia",
      expectativas:" terminar mas certificaciones de el area de tecnologia"
    },
  
    {
      año: 2021,
      logros: " certificacion en programacion orientada a objetos y HTML-CSS",
      estado:" trabajo a tiempo completo en el area de agropecuaria y ganaderia",
      expectativas:" estudiar una carrera universitaria en CiberSseguridad, y hacking etico"
    },
    {
      año: 2022,
      logros: " N/A",
      estado:" Unknown",
      expectativas:" Estudiar programacion en una beca de intercambio"
    },
    {
      año:2023,
      logros: " compra de los elementos para el estudio, nueva morada",
      estado: " mudanza recien hecha desde Brasil, independencia finanziera",
      expectativas: " lograr la graduacion en la carrera de full stack developer, conseguir un empleo bien remunerado"
    },
    {
      año:" 2024?",
      logros:" poder condeguir empleo en tecnologia con salario minimo de 500 dolares?" ,
      estado:" apartamento propio y mejor gestion del tiempo",
      expectativas:" organizacion de vida",
    }
    // Agrega más eventos aquí...
  ];

  const mostrarInformacion = (event) => {
    setEvento(event);
    setMostrarDiv(true);
  };

  const ocultarDiv = () => {
    setMostrarDiv(false);
  };

  const styles = {
    container: {
      // Estilos del contenedor principal...
    },
    yearButton: {
      background: "#007bff",
      color: "#fff",
      border: "none",
      padding: "5px 10px",
      margin: "5px",
      cursor: "pointer",
      borderRadius: "5px",
    },
    // Más estilos aquí...
  };

  return (
  <div className="contenedor">

    <div style={styles.container}>
      <h1>Yo me llamo Omar Florez</h1>
      <hr></hr>
      <img style={{
        alignItems:"center",
        border:"5px solid #44e4ea",
        height:"200px",
        borderImage:'linear-gradient(to top, lime, cyan, OrangeRed) 3',
        clipPath:"circle(50% at 50% 50%)"
        
      }} src="https://i.pinimg.com/474x/eb/ad/14/ebad14ff96f0d64092da0a201ed63810.jpg" alt="profile"/>

      <h2>Nacimiento: Colombia</h2>
      <hr></hr>
      <div className="divFlotant" >  
      <div className="year-buttons">
        {events.map((event, index) => (
          <button
            key={index}
            style={styles.yearButton}
            onClick={() => mostrarInformacion(event)}
          >
            {event.año}
          </button>
        ))}
      </div >
      {mostrarDiv && (
      
        <div className="divFlotantes">
          <button onClick={ocultarDiv}>cerrar</button>
          <h3>Información del evento:</h3>
          <p>Año: {evento.año}</p>
          <div className="pato">
          <p>logros: {evento.logros}</p>
          </div>
          <div className="pato">
          <p>estado:{evento.estado}</p>
          </div>
          <div className="pato">
          <p>expectativas:{evento.expectativas}</p>
          </div>
        </div>
        
      )}
      <nav>
        <h1>Soy Omar</h1>
      </nav>
    </div>
  </div>

  </div>
  
  
  );
};

export default About;
