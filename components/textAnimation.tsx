"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true }); // Activar solo una vez

  // Configuración de la animación
  const textAnimation = {
    hidden: { opacity: 0, y: -20 },  // Comienza oculto y hacia arriba
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.9 }  // Duración de la animación
    }
  };

  return (
    <motion.h1 
      ref={ref} // Referencia para el hook useInView
      className={`text-4xl text-center font-bold ${className}`} // Clase personalizada
      initial="hidden" 
      animate={isInView ? "visible" : "hidden"} // Animación basada en la visibilidad
      variants={textAnimation}
    >
      {text}
    </motion.h1>
  );
};

export default AnimatedText;

