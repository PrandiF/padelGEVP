import Title from "../../commons/Title";
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
    <section id={id} className="w-full xl:py-16 pb-12 bg-transparent relative">
      <div className="container mx-auto px-6 text-center">
        <div className="flex mx-auto w-full items-center justify-center">
          <Title
            title="Información Adicional"
            className="items-center justify-center"
          />
        </div>

        <div
          className="bg-container-gradient shadow-2xl rounded-lg p-8 mt-6"
          data-aos="fade"
          data-aos-delay="400"
        >
          <h3 className="text-3xl font-semibold mb-4 text-[#6EC1E4]">
            Sacá tu abono
          </h3>
          <p className="text-sm text-gray-600 mb-4 xl:text-lg">
            En padel GEVP podes sacar tu abono por mes y tener tu cancha el
            mismo dia, a la misma hora, durante 4 semanas para no quedarte sin
            jugar y poder disfrutar del padel con tus amigos.
          </p>
          <h3 className="text-3xl font-semibold mb-4 text-[#6EC1E4]">
            ¿Olvidaste tus paletas? ¡Nosotros te cubrimos!
          </h3>
          <p className="text-sm text-gray-600 mb-4 xl:text-lg">
            No dejes que la falta de equipo arruine tu juego. Si olvidaste tus
            paletas o no tienes una, no te preocupes: contamos con opciones
            listas para que sigas disfrutando sin interrupciones. ¡Ven, elige la
            que más te guste y concéntrate en lo importante, jugar!
          </p>
          {/* <ul className="text-gray-600 mb-6 text-left max-w-md mx-auto">
            <li className="mb-2">
              🧒 <span className="font-semibold">Clases para niños: </span>
              Introducción al tenis en un entorno divertido.
            </li>
            <li className="mb-2">
              👦{" "}
              <span className="font-semibold">Clases para adolescentes: </span>
              Perfeccionamiento técnico y táctico.
            </li>
            <li className="mb-2">
              🧑 <span className="font-semibold">Clases para adultos: </span>
              Desde principiantes hasta jugadores avanzados.
            </li>
          </ul> */}
          <p className="text-gray-600">Contáctanos para más información.</p>
          <a
            href="https://wa.me/5491173686929?text=Hola,%20quiero%20sacar%20mi%20abono."
            className="text-gray-600 flex items-center justify-center gap-2 mt-2 hover:underline hover:text-green-500"
            target="_blank"
          >
            <FaWhatsapp /> 11 7368 6929
          </a>
          <a
            href="https://www.instagram.com/gevp.padel/"
            className="text-gray-600 flex items-center justify-center gap-2 mt-2 hover:underline hover:text-blue-500"
            target="_blank"
          >
            <FaInstagram />
            padle.gevp
          </a>
        </div>
      </div>
    </section>
  );
}

export default AditionalInfo;
