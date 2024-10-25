'use client'; // Para que se renderice en el cliente
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ItemProps {
  text: string;
  icon?: string; // Agrega una nueva propiedad para el ícono
}

const Benefits: React.FC<ItemProps> = ({ text, icon }) => {
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
      initial={{ opacity: 0, x: -100 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }} 
      className="flex items-center space-x-2"
    >
      {/* Ícono desde la carpeta public */}
      <img src={icon} alt="icon" className="w-6 h-6" />
      <p className="text-lg">{text}</p>
    </motion.div>
  );
};

export default Benefits;
