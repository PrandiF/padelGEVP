import Title from "../../commons/Title";
import Slider from "./Slider";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SliderResponsive from "./SliderResponsive";

type InstalSectionProps = {
  id?: string;
};

function InstalSection({ id }: InstalSectionProps) {
  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);
  return (
    <div className="relative z-30 w-full h-full xl:mt-[2%] flex flex-col gap-5" id={id}>
      <div
        className="mx-auto w-full flex justify-center items-center"
        data-aos="fade"
        data-aos-delay="400"
      >
        <Title
          title="¡Jugamos Todos!"
          className="items-center justify-center"
        />
      </div>
      <div
        className="w-full text-white flex justify-center items-center xl:text-2xl text-xl text-center"
        data-aos="fade"
        data-aos-delay="400"
      >
        <p className="xl:text-base text-lg w-[90%]">
          Momentos épicos, risas y buena onda en nuestras canchas. Hasta Juan
          Ignacio Chela se sumó a la diversión. ¿Y vos, cuándo venís a jugar?
        </p>
      </div>
      <div className="xl:w-[90%] w-[90%] bg-container-gradient shadow-2xl p-[40px] flex mx-auto items-center justify-center rounded-xl flex-col gap-5">
        <Slider />
        <SliderResponsive />
      </div>
    </div>
  );
}

export default InstalSection;
