"use client";
import ButtonComponent from "@/components/button";
import CardComponent from "@/components/card";
import CarruselComponent from "@/components/carrusel";
import CircleComponent from "@/components/esferas";
import LogrosComponent from "@/components/logra";
import FullScreenVideo from "@/components/mainVideo";
import MapComponent from "@/components/map";
import ModalComponent from "@/components/modal";
import { title } from "@/components/primitives";
import { DynamicContent } from "@/components/services";
import AnimatedText from "@/components/textAnimation";
import WhatsAppButton from "@/components/whatsappButton";


export default function Home() {

  const usaRequirements = [
    "Tener entre 18 y 26 años de edad.",
    "Experiencia en el cuidado de niños - mínimo 1.200 horas certificadas.",
    "Ser soltera y sin hijos.",
    "Nivel B1 de Inglés.",
    "Tener licencia de conducción.",
    "No tener antecedentes penales.",
    "Ser bachiller graduado.",
    "No cuentas con todos los requisitos, no es problema, te ayudamos.",
  ];

  const germanyRequirements = [
    "Tener entre 18 y 26 años de edad.",
    "Experiencia en el cuidado de niños mínimo 600 horas.",
    "Nivel A2 de alemán.",
    "Curso de Primeros Auxilios.",
    "Ser bachiller graduado.",
    "Ser soltero(a) y sin hijos.",
  ];

  const germanyBenefits = [
    "300 euros mensuales o más.",
    "Solo trabajas 30 horas por semana.",
    "Estudia lo que más te guste en Alemania.",
    "Viaja por toda Europa de manera muy económica.",
    "Bono educativo.",
  ];

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


  return (
    <div className=" flex flex-col min-h-screen ">
      <FullScreenVideo src="/mainVideo.mp4"/>


        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <CardComponent 
        title="Be au pair of the wolrd"
        description="Ser au pair es tu puerta de entrada a una aventura global. Vive en un país extranjero, sumérgete
                     en su cultura y forma parte de una familia local que te acoge como uno más. No solo cuidarás de
                     niños, sino que crearás lazos que trascienden fronteras, aprenderás un nuevo idioma y harás
                     amigos de todo el mundo. ¡Prepárate para una vida llena de viajes, descubrimientos y experiencias
                     inolvidables! ¿Estás listo para comenzar tu próxima gran aventura?
                    ¡Da el primer paso hacia la aventura de tu vida con Be au Pair!"
      />
      <CardComponent 
        title="¿Qué es ser AU PAIR?"
        description="Au Pair es un programa de intercambio cultural que brinda la posibilidad de estar un ano
                    o más en el extranjero, aprender sobre una cultura diferente y mejorar las habilidades en
                    un idioma a cambio del cuidado de niños. El término “Au Pair” viene del francés y significa
                    “a la par”, lo que quiere decir que la Familia Anfitriona y el Au Pair se tratan como iguales."
      />
        </section>

         <div className="flex flex-col items-center justify-center mt-16">
          <div className="max-w-xl text-center">
          <span className={title()}>Vive una experiencia única en &nbsp;</span>
          <span className={title({ color: "violet" })}>EEUU&nbsp;</span>
          <br />
          <span className={title()}>
           y logra:
         </span>
         </div>
         </div>

         <div className="flex flex-col space-y-4 mt-16">
          <LogrosComponent/>
         </div>

        <div className="flex flex-col items-center justify-center mt-16">
          <div className="max-w-xl text-center">
          <span className={title()}>¡No dejes pasar esta oportunidad de transformar tu vida mientras descubres el &nbsp;</span>
          <span className={title({ color: "violet" })}>sueño&nbsp;</span>
          <br />
          <span className={title()}>
          americano!
         </span>
         </div>
         </div>


        <div className="flex flex-col items-center justify-center mt-14">
        <ButtonComponent />
        </div>

        <div className=" mt-16">
        <AnimatedText text="Con Au pair podrás lograr" className="text-2xl md:text-xl text-[#BF5FFF]" />
        </div>

        <div className="mt-8">
        <CarruselComponent />
        </div>

        
        
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
    <CardComponent 
      className="h-64" // Altura fija
      title="REQUISITOS USA"
      description={<ul className="list-disc text-left ml-4">{usaRequirements.map((req, i) => <li key={i}>{req}</li>)}</ul>}
    />
    <CardComponent 
      className="h-64" // Altura fija
      title="REQUISITOS ALEMANIA"
      description={<ul className="list-disc text-left ml-4">{germanyRequirements.map((req, i) => <li key={i}>{req}</li>)}</ul>}
    />
    <CardComponent 
      className="h-64" // Altura fija
      title="BENEFICIOS DE SER AU PAIR ALEMANIA"
      description={<ul className="list-disc text-left ml-4">{germanyBenefits.map((benefit, i) => <li key={i}>{benefit}</li>)}</ul>}
    />
      </div>
      </section>


      <div className="flex flex-col items-center justify-center mt-16">
          <div className="max-w-xl text-center">
          <span className={title({ color: "violet" })}>PLAN DE PAGOS Au Pair USA&nbsp;</span>
          <br />
          <span className={title()}>
         </span>
         </div>
         </div>


      <div className=" mt-16">
      <AnimatedText text="Nuestros Servicios" className="text-[#BF5FFF]" />
      </div>

      <div className=" mt-16">

      </div>
      

      <div className="mt-16">
      <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
       <DynamicContent />
       </a>
      </div>

         <div className="flex flex-col items-center justify-center mt-16">
         <div className="max-w-xl text-center">
         <span className={title()}>Déjanos tus datos y un experto en viajes se pondrá en &nbsp;</span>
         <span className={title({ color: "violet" })}>contacto&nbsp;</span>
         <br />
         <span className={title()}>
         contigo.
         </span>
         </div>
         <div className="mt-8">
         <ModalComponent />
         </div>
         </div>

         <div className="mt-24">
          <h2 className="text-center font-semibold text-2xl">Nuestro equipo</h2>
          <div className="mt-8">
          <CircleComponent/>
          </div>
         </div>



        <div className="mt-8">
        <MapComponent />
        </div>

        
        <div>
        <WhatsAppButton />
        </div>


    </div>
  );
}
