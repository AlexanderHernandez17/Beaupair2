import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import { motion, useInView } from "framer-motion"; // Importa useInView

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role, description, imageSrc }) => {
  const ref = React.useRef(null); 
  const isInView = useInView(ref, { once: true }); 

  return (
    <motion.div
      ref={ref} 
      initial={{ x: -100, opacity: 0 }} 
      animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }} 
      transition={{ duration: 0.5 }} 
    >
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 shadow-lg border-2 border-purple-500" // Borde violeta
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4">
              <Image
                alt={name}
                className="object-cover"
                height={200}
                shadow="md"
                src={imageSrc}
                width="100%"
              />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-8">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                  <h3 className="font-semibold text-foreground/90">{name}</h3>
                  <p className="text-small text-foreground/80">{role}</p>
                  <h1 className="text-large font-medium mt-2">{description}</h1>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default function Team() {
  const teamMembers = [
    {
      name: "VICTORIA ECHEVERRI",
      role: "Fundadora",
      description: "Ama su trabajo, ayudar a las personas a cumplir su sueño de estudiar en otro país y vivir una verdadera experiencia de vida es su mayor pasión...",
      imageSrc: "/directora.jpg",
    },
    {
      name: "JOSE GALVIS",
      role: "Marketing Manager",
      description: "Jose es un profesional experimentado en marketing, siempre buscando nuevas estrategias para aumentar el alcance...",
      imageSrc: "/hombre.jpg",
    },
    {
      name: "MARIA CLAUDIA CORAL",
      role: "Lider del Programa Au Pair",
      description: "María Claudia es una persona apasionada por las artes, especialmente por la música y los idiomas...",
      imageSrc: "/mujer2.jpg",
    },
    {
      name: "CAROLINA HENAO",
      role: "Social Media Manager",
      description: "Carolina es una experta en redes sociales, que ayuda a las marcas a construir una presencia sólida...",
      imageSrc: "/mujer3.jpg",
    },
  ];

  return (
    <div className="grid gap-6">
      {teamMembers.map((member, index) => (
        <TeamMemberCard 
          key={index}
          name={member.name}
          role={member.role}
          description={member.description}
          imageSrc={member.imageSrc}
        />
      ))}
    </div>
  );
}
