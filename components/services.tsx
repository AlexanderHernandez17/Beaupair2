import React, { useEffect, useState } from 'react';

const servicesList = [
  'Seguros: Regístrate y un asesor experto te contactará',
  'Trámites Visa de Turismo',
  'Cotiza tus tiquetes: le da click y se abre un formulario',
];

export const DynamicContent = () => {
  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % servicesList.length);
    }, 3000); // Cambia el texto cada 3 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  return (
    <div
      className="relative w-full h-64 bg-cover bg-center"
      style={{
        backgroundImage: "url('/pink.jpg')", // Cambia esta ruta por la de tu imagen
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Capa oscura para mejor contraste */}
      <div className="relative flex items-center justify-center h-full text-white text-2xl font-bold p-4">
        {servicesList[currentService]}
      </div>
    </div>
  );
};
