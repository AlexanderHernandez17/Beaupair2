'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: React.ReactNode; // Cambiado a ReactNode para permitir JSX
}

const CardComponent: React.FC<CardProps> = ({ title, description }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Dejar de observar una vez que es visible
        }
      },
      {
        threshold: 0.1, // Ajusta el umbral según sea necesario
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // Limpiar el observador
      }
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }} // Inicialmente oculto y desplazado hacia abajo
      animate={isVisible ? { opacity: 1, y: 0 } : {}} // Se anima al ser visible
      transition={{ duration: 0.5 }} // Duración de la animación
      className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 mt-6"
    >
      <h3 className="text-2xl text-center text-morado font-chewy mb-2">{title}</h3>
      <div className="text-lg text-center font-poppins">{description}</div>
    </motion.div>
  );
};

export default CardComponent;
