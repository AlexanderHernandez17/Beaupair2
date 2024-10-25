"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const AnimatedText = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true }); // Activar solo una vez

  // Configuración de la animación
  const textAnimation = {
    hidden: { opacity: 0, y: -20 },  // Comienza oculto y hacia arriba
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 }  // Duración de la animación
    }
  };

  return (
    <motion.h1 
      ref={ref} // Referencia para el hook useInView
      className="text-4xl text-center font-bold text-[#BF5FFF]" // Tamaño de texto ajustado y centrado
      initial="hidden" 
      animate={isInView ? "visible" : "hidden"} // Animación basada en la visibilidad
      variants={textAnimation}
    >
      Nuestros Servicios
    </motion.h1>
  );
};

export default AnimatedText;


