import React from 'react';

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
    </div>
  );
};

export default FullScreenVideo;
