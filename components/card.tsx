"use client";
import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { Card, CardBody } from '@nextui-org/react';

interface CardProps {
  title: string;
  description: React.ReactNode; // Cambiado a ReactNode para permitir JSX
}

const CardComponent: React.FC<CardProps> = ({ title, description }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true }); // Solo activa una vez cuando está visible

  return (
    <motion.div
      ref={ref}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 shadow-lg border-2" // Borde violeta
      >
        <CardBody>
          <h1 className="text-center font-blueberry text-foreground/90" style={{ color: "violet" }}>
          {title}</h1>
          <div className="text-large font-medium mt-2">{description}</div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default CardComponent;
