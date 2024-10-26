"use client";
import { motion, useInView } from 'framer-motion';
import { Card, CardBody } from '@nextui-org/react';
import Image from 'next/image';
import { useRef } from 'react';

export default function Page() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Define los valores directamente
  const imageSrc = "/directora.jpg";
  const name = "Victoria Echeverri";

  return (
    <div className="page-container flex justify-center items-center min-h-screen">
      <div className="flex flex-col md:flex-row gap-8"> {/* Cambia aquí a flex-col en móviles */}
        {/* Tarjeta de la imagen */}
        <motion.div
          ref={ref}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            isBlurred
            className="w-full md:w-80 h-96 overflow-hidden border-none bg-background/60 dark:bg-default-100/50 shadow-lg border-2 border-purple-500"
          >
            <CardBody className="p-0">
              <Image
                alt={name}
                src={imageSrc} // Imagen fija
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </CardBody>
          </Card>
        </motion.div>

        {/* Tarjeta del texto */}
        <motion.div
          ref={ref}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            isBlurred
            className="w-full md:w-[28rem] h-96 border-none bg-background/60 dark:bg-default-100/50 shadow-lg border-2 border-purple-500"
          >
            <CardBody>
              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-foreground/90 text-xl">{name}</h3>
                <p className="text-small text-foreground/80">Fundadora</p>
                <p className="text-medium font-medium mt-2">
                  Ama su trabajo, ayudar a las personas a cumplir su sueño de estudiar en otro país
                  y vivir una verdadera experiencia de vida es su mayor pasión, le encanta ayudar al
                  que lo necesita y está dispuesta siempre a escuchar a sus amigos y disfrutar de ellos.
                  Le encanta viajar, su lema es “nada como aprender viajando”, Italia es uno de sus países
                  favoritos, el idioma, la gastronomía, la gente, sus paisajes... por lo mismo, comer pasta y
                  pizza es lo que más le gusta.
                </p>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}