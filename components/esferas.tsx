"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CircleComponent() {
  // Variantes de animación para cada círculo
  const circleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };


  const people = [
    { name: "Fundadora", image: "/directora.jpg", url: "/Fundadora" },
    { name: "Marketing Manager", image: "/hombre.jpg", url: "/MarketingManager" },
    { name: "Social Media Manager", image: "/mujer3.jpg", url: "/SocialMediaManager" },
    { name: "Lider Au Pair", image: "/mujer2.jpg", url: "/LiderDelProgramaAupair" },
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-6">
        {people.map((person, index) => (
          <div className="flex flex-col items-center" key={index}>
            <Link href={person.url}>
              <motion.div
                className="w-20 h-20 rounded-full bg-cover bg-center cursor-pointer" // Añadido cursor pointer
                style={{ backgroundImage: `url(${person.image})` }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.2 }}
                variants={circleVariants}
              />
            </Link>
            <motion.p
              className="mt-2 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }} // Delay adicional para los nombres
            >
              {person.name}
            </motion.p>
          </div>
        ))}
      </div>
      <motion.h2
        className="text-center text-lg font-semibold mt-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }} // Retiré el contenido del h2
      >

      </motion.h2>
    </div>
  );
}
