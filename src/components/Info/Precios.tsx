import Title from "../../commons/Title";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Button1 from "../../commons/Button1";

type PreciosProps = {
  id?: string;
};

function Precios({ id }: PreciosProps) {
  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);
  return (
    <section id={id} className="w-full bg-transparent relative">
      <div className="container mx-auto px-6 text-center">
        <div
          className="bg-container-gradient shadow-2xl rounded-lg p-8 mb-8 mt-6 leading-relaxed"
          data-aos="fade"
          data-aos-delay="400"
        >
          <h3 className="text-3xl font-semibold mb-4 text-[#6EC1E4]">
            Tarifas y promociones
          </h3>
          <p className="text-lg font-bold text-gray-600 mb-4">
            Disfruta de nuestras canchas de padel de primer nivel disponibles de
            Lunes a Sabados de 9:30hs a 20:00hs.
          </p>
          <p className="text-lg font-bold text-green-700 mb-2">
            <span className="text-xl font-bold text-gray-800">Socios: </span>
            $31.000
          </p>
          <p className="text-lg text-gray-800 mb-6 flex flex-col">
            <span className="text-lg font-bold text-green-700 flex mx-auto gap-1 justify-center items-center">
              <p className="text-xl font-bold text-gray-800">No socios: </p>
              $38.000
            </span>
          </p>
          <p className="text-black my-5">
            <span className="text-2xl font-bold text-red-500">Promo: </span>
            Hasta las 15hs
          </p>
          <p className="text-lg font-bold text-green-700 mb-2">
            <span className="text-xl font-bold text-gray-800">Socios: </span>
            $31.000
          </p>
          <p className="text-lg text-gray-800 mb-6 flex flex-col">
            <span className="text-lg font-bold text-green-700 flex mx-auto gap-1 justify-center items-center">
              <p className="text-xl font-bold text-gray-800">No socios: </p>
              $38.000
            </span>
          </p>
          <p className="text-gray-600 flex xl:flex-row flex-col xl:gap-1 mx-auto justify-center xl:items-center">
            Duración turnos:
            <span className="font-semibold xl:ml-0 ml-[5px]">1:30hs</span>
          </p>
          <div className="flex w-full items-center justify-center mt-[1%]">
            <Button1
              text="Reservar"
              bg="bg-blue-gradient"
              textColor="text-[#fff]"
              url="https://app.acuityscheduling.com/schedule.php?owner=34590878"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Precios;
