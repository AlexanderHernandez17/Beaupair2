"use client";
import { motion, useInView } from 'framer-motion';
import { Card, CardBody } from '@nextui-org/react';
import Image from 'next/image';
import { useRef } from 'react';

export default function Page() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Define los valores directamente
  const imageSrc = "/hombre.jpg";
  const name = "Jose Galvis";

  

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
                <p className="text-small text-foreground/80">Marketing Manager</p>
                <p className="text-medium font-medium mt-2">
                jose es una persona apasionada por las artes, especialmente por la música y los idiomas.
Actualmente, está estudiando japonés, ya que uno de sus sueños más grandes es conocer Japón y
poder comunicarse en su idioma. En 2023, María Claudia vivió la enriquecedora experiencia de ser
Au Pair en los Estados Unidos, con Be Au pair, lo que no solo le permitió perfeccionar su inglés,
sino también sumergirse en una experiencia cultural única. Ahora, está dedicada a ayudar a otras
personas a cumplir sus sueños de viajar a los Estados Unidos u otros países mientras mejoran su
dominio del idioma. Además, se caracteriza por su carácter tranquilo, paciente y empático, lo cual
le permite conectar con las personas fácilmente y tiene una gran afición por los gatos, que siempre
han sido una compañía especial para ella.
                </p>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

