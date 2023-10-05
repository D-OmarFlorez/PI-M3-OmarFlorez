import React, { useState, useEffect } from "react";

const ImagenHora = ({ images }) => {
  const [horaImagen, setHoraImagen] = useState(null);

  // Función para obtener la hora actual
  const horaActual = () => {
    const now = new Date();
    return now.getHours();
  };

  // Función para seleccionar la imagen según la hora del día
  const imagenPorHora = () => {
    const currentHora = horaActual();
    if (currentHora >= 6 && currentHora < 12) {
      return images.mañana; // URL de la imagen de 6am a 12pm
    } else if (currentHora >= 12 && currentHora < 18) {
      return images.tarde; // URL de la imagen de 12pm a 6pm
    } else if (currentHora >= 18 && currentHora < 24) {
      return images.noche; // URL de la imagen de 6pm a 12am
    } else {
      return images.madrugada; // URL de la imagen de 12am a 6am
    }
  };

  useEffect(() => {
    const selectedImage = imagenPorHora();
    setHoraImagen(selectedImage);
  }, []);

  return (
    <div className="horaimg">
      {horaImagen && (
        <img
          src={horaImagen}
          alt="Imagen del momento del día"
          style={{ width: "50%",
           maxHeight: "80vh",
        borderRadius:"10%",
        float:"left" }}
        />
      )}
    </div>
  );
};

export default ImagenHora;