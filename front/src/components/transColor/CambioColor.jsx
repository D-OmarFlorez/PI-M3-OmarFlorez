// import React from 'react';

// const ColorfulBackground = ({ children }) => {
//   const style = {
//     background: 'linear-gradient(270deg, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)',
//     backgroundSize: '1400% 1400%',
//     animation: 'rainbow 10s ease infinite',
//     animationName: `@keyframes rainbow {
//       0%{background-position:0% 82%}
//       50%{background-position:100% 19%}
//       100%{background-position:0% 82%}
//     }`,
//   };

//   return (
//     <div style={style}>
//       {children}
//     </div>
//   );
// };

// export default ColorfulBackground;
import React from 'react';

const MyButton = ({ name }) => {
  const style = {
    background: 'linear-gradient(270deg, #0000ff, #008000, #ee82ee, #ffff00)',
    backgroundSize: '400% 400%',
    animation: 'rainbow 3s ease infinite',
    animationName: `@keyframes rainbow {
      0%{background-position:0% 82%}
      50%{background-position:100% 19%}
      100%{background-position:0% 82%}
    }`,
    color: 'white', // Asegúrate de que el texto del botón sea visible
    border: 'none', // Elimina el borde del botón
    padding: '10px', // Añade algo de padding para que el botón sea más grande
    cursor: 'pointer', // Cambia el cursor a un puntero cuando se pasa por encima del botón
  };


  return (
    <button style={style}>{name}</button>
  );
};

export default MyButton;
