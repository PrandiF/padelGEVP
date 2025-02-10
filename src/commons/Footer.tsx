import { FaInstagram, FaWhatsapp, FaEnvelope, FaGlobe, FaTiktok } from "react-icons/fa";

type FooterProps = {
  id?: string;
};
function Footer({ id }: FooterProps) {
  return (
    <footer className="bg-gradient-to-b from-transparent to-black text-white py-8 z-30 relative" id={id}>
      <div className="container mx-auto xl:px-0 px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          
          <div className="flex flex-col mx-auto">
            <h3 className="xl:text-xl font-semibold mb-2 underline">Seguínos</h3>
            <a
              href="https://www.instagram.com/gevp.padel/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg hover:text-gray-400 transition"
            >
              <FaInstagram />
              gevp.padel
            </a>
            <a
              href="https://www.tiktok.com/@gevp.padel/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg hover:text-gray-400 transition"
            >
              <FaTiktok />
              gevp.padel
            </a>
          </div>

          <div className="flex flex-col mx-auto">
            <h3 className="xl:text-xl font-semibold mb-2 underline">Contacto</h3>
            <a
            href="https://wa.me/5491173686929?text=Hola,%20quiero%20reservar%20una%20cancha."
            className="flex items-center gap-2 mt-2 hover:text-gray-400 transition"
            target="_blank"
          >
            <FaWhatsapp /> 11 7368 6929
          </a>
            <p className="flex items-center gap-2 text-lg">
              <FaEnvelope />
              vrodrigoaaron@gmail.com
            </p>
          </div>

          <div className="xl:flex xl:flex-col xl:mx-auto hidden">
            <h3 className="xl:text-xl font-semibold mb-2 underline">
              Visita nuestra web
            </h3>
            <a
              href="https://www.clubgevp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg hover:text-gray-400 transition"
            >
              <FaGlobe />
              www.clubgevp.com
            </a>
          </div>

          {/* <div className="xl:flex hidden flex-col items-start">
            <h3 className="xl:text-xl font-semibold mb-2 underline">
              Sobre nosotros
            </h3>
            <p className="text-lg">
              Club GEVP es un club dedicado a ofrecer actividades deportivas y
              recreativas para todas las edades.
            </p>
          </div> */}
        </div>
        <div className="xl:hidden flex flex-col mx-auto w-full justify-center items-center mt-[20px] text-start">
            <h3 className="xl:text-xl font-semibold mb-2 underline">
              Visita nuestra web
            </h3>
            <a
              href="https://www.clubgevp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg hover:text-gray-400 transition"
            >
              <FaGlobe />
              www.clubgevp.com
            </a>
          </div>


        <div className="text-center mt-8">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Club GEVP. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
