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
    imageUrl: "/idioma.jpg", 
  },
  {
    title: "Crear Lazos Internacionales",
    description: "Formarás amistades profundas con personas de diferentes culturas, construyendo una red global que durará toda la vida.",
    imageUrl: "/lazos.jpg",
  },
  {
    title: "Vivir una Inmersión Cultural",
    description: "Conocerás a fondo las tradiciones, costumbres y estilo de vida de otra cultura, lo que enriquecerá tu perspectiva del mundo.",
    imageUrl: "/cultura.jpg",
  },
  {
    title: "Aprender Viajando",
    description: "Viajarás por tu país anfitrión y más allá, descubriendo lugares icónicos, paisajes impresionantes y aventuras inesperadas.",
    imageUrl: "/viajando.jpg",
  },
  {
    title: "Crecimiento profesional y personal",
    description: "La experiencia como au pair te distinguirá en el mercado laboral, mostrando tu adaptabilidad, responsabilidad y habilidad para resolver problemas.",
    imageUrl: "/crecimiento.jpg",
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
      <Card className="relative h-96 w-80 mx-auto rounded-xl overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            priority={true}
            alt="Card background"
            src={image}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-black bg-opacity-40 flex flex-col justify-center items-center p-8 text-white rounded-xl">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
            <h4 className="font-bold text-2xl text-center">{title}</h4>
          </CardHeader>
          <CardBody className="py-2 flex flex-col items-center">
            <p className="font-bold mt-8 text-center">{description}</p>
          </CardBody>
        </div>
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
        loop={true}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { // configuración para pantallas pequeñas (móviles)
            slidesPerView: 1,
          },
          1024: { // configuración para pantallas grandes (escritorio)
            slidesPerView: 3,
          },
        }}
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