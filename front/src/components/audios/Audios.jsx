import { faVolumeLow } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';

function ReproductorDeAudio({ src, autoPlay }) {
  const [isPlaying, setIsPlaying] = useState(autoPlay || false);
  const [muted, setMuted]=useState(true)
  const [ pista, setPista]= useState(0);
  const audioref= useRef(null);

  // const [volume, setVolume] = useState(1); // Valor inicial del volumen

  const pistas =Array.isArray(src)? src:[src];


  useEffect(()=>{
  if(pista >=0 && pista<pistas.length){
    audioref.current.src = pistas[pista];
    audioref.current.load()
    setPista(autoPlay) 
  }
  }, [pista, autoPlay, pistas])
  

  
  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };
  const silenciar = ()=>{
    setMuted(!muted)
    
  }
  // const aumentarVolumen = () => {
  //   if (audioRef.current && volume < 1) {
  //     const nuevoVolumen = Math.min(volume + 0.1, 1);
  //     setVolume(nuevoVolumen);
  //     audioRef.current.volume = nuevoVolumen;
  //   }
  // };

  // const disminuirVolumen = () => {
  //   if (audioRef.current && volume > 0) {
  //     const nuevoVolumen = Math.max(volume - 0.1, 0);
  //     setVolume(nuevoVolumen);
  //     audioRef.current.volume = nuevoVolumen;
  //   }
  // };

  return (
    <div>
      
    <div style={{
      position:"fixed",
      float:"left"
    }}>
     
      <audio style={{
      }} autoPlay={autoPlay} muted={!muted} src={src}  ref={audioref} loop="loop" >
        Tu navegador no admite la reproducción de audio.
      </audio>
      {!autoPlay && (
        <button onClick={togglePlayback}>
          {isPlaying ? 'Pausar' : 'Reproducir'}
        </button>
      )}
       {muted  &&(
        <button onClick={silenciar}>
          {muted ?'🔇':'🔈'}
        </button>
      )}
      {!muted  &&(
        <button onClick={silenciar}>
          {muted ?'🔇':'🔈'}
        </button>
      )}
      {/* <button onClick ={aumentarVolumen}>🔊</button>
      <button onClick= {disminuirVolumen}>🔉</button> */}
      </div>
    </div>
  );
}

export default ReproductorDeAudio;
