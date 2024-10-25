import React from 'react';

const MapComponent = () => {
  return (
    <div className="w-full mt-16">
      <h2 className="text-center text-2xl font-bold mb-4">¡Visítanos!</h2>
      <div className="rounded-lg overflow-hidden shadow-lg" style={{ width: '100%', height: '400px' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093707!2d-75.570198!3d6.227823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442fbc3f7ee215%3A0xa186b7b1f4a9e0f1!2sCalle%204%20Sur%20%2343A-195%2C%20Medell%C3%ADn%2C%20Poblado!5e0!3m2!1ses!2sus!4v1635862352991!5m2!1ses!2sus"
          width="100%"
          height="400"
          style={{ border: '0' }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
          title="Descripción única del contenido"
        />
      </div>
    </div>
  );
};

export default MapComponent;
