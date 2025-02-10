// import Title from "../../commons/Title";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type AddInfoProps = {
  id?: string;
};

function AditionalInfo({ id }: AddInfoProps) {
  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);
  return (
    <section id={id} className="w-full  bg-transparent relative">
      <div className="container mx-auto px-6 text-center">
        <div
          className="bg-container-gradient shadow-2xl rounded-lg p-8 mt-6 min-h-[490px]"
          data-aos="fade"
          data-aos-delay="400"
        >
          <h3 className="text-3xl font-semibold mb-4 text-[#6EC1E4]">
            ¿Olvidaste tus paletas? ¡Nosotros te cubrimos!
          </h3>
          <p className="text-sm text-gray-600 mb-4 xl:text-base">
            No dejes que la falta de equipo arruine tu juego. Si olvidaste tus
            paletas o no tienes una, no te preocupes: contamos con opciones
            listas para que sigas disfrutando sin interrupciones. ¡Vení, elegí
            la que más te guste y concéntrate en lo importante, jugar!
          </p>

          <div className="flex w-full justify-center">
            {/* Columna Derecha */}
            <div className="flex flex-col text-start w-1/2 pl-4">
              <p className="flex text-lg font-bold text-gray-600 underline mb-4">
                Alquiler de paletas
              </p>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <p className="font-bold text-gray-600">Paleta 1:</p>
                  <p className="text-black">$3.500</p>
                </div>
                <div className="flex gap-2">
                  <p className="font-bold text-gray-600">Paleta 2:</p>
                  <p className="text-black">$2.000</p>
                </div>
              </div>
            </div>

            {/* Divisor */}
            {/* <div className="border-l-2 border-gray-400 h-auto"></div> */}

            {/* Columna Derecha */}
            <div className="flex flex-col text-start w-1/2 pl-4">
              <p className="flex text-lg font-bold text-gray-600 underline mb-4">
                Tubos de pelotas en venta
              </p>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <p className="font-bold text-gray-600">Head:</p>
                  <p className="text-black">$15.000</p>
                </div>
                <div className="flex gap-2">
                  <p className="font-bold text-gray-600">Prince:</p>
                  <p className="text-black">$11.000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[5%] flex flex-col">
            <h3 className="text-3xl font-semibold mb-4 text-[#6EC1E4]">
              Sacá tu abono
            </h3>
            <p className="text-sm text-gray-600 mb-4 xl:text-base text-start">
              En <b>Pádel GEVP</b>, podés reservar tu cancha fija por mes garantizando
              tu partido con amigos sin preocupaciones.
              <br />
              <br />
              Para confirmar tu abono mensual, el pago debe realizarse dentro de
              los primeros 10 días del mes. El costo se calcula multiplicando el
              valor de la cancha por la cantidad de días reservados, con un
              <b>
                10% de descuento para no socios y un 20% de descuento para
                socios.
              </b>
              <br />
              <br />
              <p className="font-bold text-center">¡No te quedes sin jugar, asegurá tu cancha y disfrutá del mejor pádel!</p>
            </p>
          </div>

          <p className="text-gray-600">Contáctanos para más información.</p>
          <a
            href="https://wa.me/5491173686929?text=Hola,%20quiero%20sacar%20mi%20abono."
            className="text-gray-600 flex items-center justify-center gap-2 mt-2 hover:underline hover:text-green-500 w-fit mx-auto"
            target="_blank"
          >
            <FaWhatsapp /> 11 7368 6929
          </a>
          <a
            href="https://www.instagram.com/gevp.padel/"
            className="text-gray-600 flex items-center justify-center gap-2 mt-2 hover:underline hover:text-blue-500 w-fit mx-auto"
            target="_blank"
          >
            <FaInstagram />
            padel.gevp
          </a>
        </div>
      </div>
    </section>
  );
}

export default AditionalInfo;
