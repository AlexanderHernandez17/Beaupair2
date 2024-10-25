// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

export default function MySwiperComponent() {
  return (
    <Swiper
      // Módulos y configuración
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('Slide changed')}
    >
      {/* Slides */}
      <SwiperSlide>
        <div className="bg-blue-200 p-10">Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-red-200 p-10">Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-green-200 p-10">Slide 3</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-yellow-200 p-10">Slide 4</div>
      </SwiperSlide>
    </Swiper>
  );
}
