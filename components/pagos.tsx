// components/BenefitsList.js
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const secondBenefitsList = [
  {
    text: 'Único pago de valor $3.500.000',
    icon: '/favorito.png',
  },
  {
    text: 'Matrícula: $600.000 - Pago restante $2.900.000',
    icon: '/favorito.png',
  },
  {
    text: 'Pago Diferido por valor de $4.050.000',
    icon: '/favorito.png',
  },
];

const BenefitsList = () => {
  // Referencia para el contenedor de la lista
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // animará solo la primera vez que sea visible

  return (
    <div ref={ref} className="space-y-4">
      {secondBenefitsList.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}} // animación solo cuando está en vista
          transition={{
            duration: 0.8,
            delay: index * 0.4,
            ease: 'easeInOut',
          }}
          className="flex items-center"
        >
          <img src={item.icon} alt="icono" className="w-6 h-6 mr-4" />
          <p className="text-gray-800 font-semibold text-2xl">{item.text}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default BenefitsList;
