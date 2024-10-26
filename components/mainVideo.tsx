import React from 'react';
import { title } from './primitives';
import ButtonComponent from './button';

interface FullScreenVideoProps {
  src: string;
  alt?: string; 
}

const FullScreenVideo: React.FC<FullScreenVideoProps> = ({ src, alt }) => {
  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      height: '100vh', 
      overflow: 'hidden',
    }}>
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Asegúrate de que el video cubra el contenedor
          borderRadius: '20px', // Para redondear esquinas si es necesario
        }}
        aria-label={alt}
      />
      <section className="absolute inset-0 flex flex-col items-center justify-center gap-4 py-8 md:py-10">
       <div className="inline-block max-w-xl text-center">
         <span className={`${title()} font-blueberry`}>Descubre tu &nbsp;</span>
         <span className={title({ color: "violet" })}>lugar&nbsp;</span>
         <br />
        <span className={title()}>
         en el mundo y transforma tu vida.
         </span>
        </div>
       {/* Coloca el botón en un nuevo div fuera del contenedor de texto para que aparezca debajo */}
        <div className="inline-block max-w-xl text-center">
       <ButtonComponent />
      </div>
      </section>
    </div>
  );
};

export default FullScreenVideo;
