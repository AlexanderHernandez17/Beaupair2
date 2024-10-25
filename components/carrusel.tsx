import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { Card, CardHeader, CardBody } from '@nextui-org/react';
import { motion } from "framer-motion";
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface CarruselProps {
  title: string;
  description: string;
  image: string;
}

const items = [
  {
    title: "Dominar un Nuevo Idioma",
    description: "Lograrás fluidez en un segundo idioma, abriendo puertas a oportunidades internacionales y conectándote con personas de todo el mundo.",
    imageUrl: "/amigas hablando.jfif", 
  },
  {
    title: "Crear Lazos Internacionales",
    description: "Formarás amistades profundas con personas de diferentes culturas, construyendo una red global que durará toda la vida.",
    imageUrl: "/lazos internacionales.jfif",
  },
  {
    title: "Vivir una Inmersión Cultural",
    description: "Conocerás a fondo las tradiciones, costumbres y estilo de vida de otra cultura, lo que enriquecerá tu perspectiva del mundo.",
    imageUrl: "/cultura.jfif",
  },
  {
    title: "Aprender Viajando",
    description: "Viajarás por tu país anfitrión y más allá, descubriendo lugares icónicos, paisajes impresionantes y aventuras inesperadas.",
    imageUrl: "/viajee.jfif",
  },
  {
    title: "Crecimiento profesional y personal",
    description: "La experiencia como au pair te distinguirá en el mercado laboral, mostrando tu adaptabilidad, responsabilidad y habilidad para resolver problemas.",
    imageUrl: "/crecimiento.jfif",
  },
];

const Carrusel: React.FC<CarruselProps> = ({ title, description, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-4/5 mx-auto py-8">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <h4 className="font-bold text-2xl text-center">{title}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2 flex flex-col items-center">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={image}
            width={540}
            height={360}
          />
          <p className="text-lg uppercase font-bold mt-4 text-center">{description}</p>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default function CarruselComponent() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <Carrusel title={item.title} description={item.description} image={item.imageUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
