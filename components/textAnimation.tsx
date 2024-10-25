import { motion } from 'framer-motion';

const AnimatedText = () => {
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
      className="text-6xl font-bold text-[#BF5FFF]" // Lila fluorescente
      initial="hidden" 
      animate="visible"
      variants={textAnimation}
    >
      Nuestros Servicios
    </motion.h1>
  );
};

export default AnimatedText;
