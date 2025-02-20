import { useEffect } from "react";
import Title from "../../commons/Title";
import AOS from "aos";
import "aos/dist/aos.css";

type NosotrosProps = {
  id?: string;
};

function Nosotros({ id }: NosotrosProps) {
  useEffect(() => {
    AOS.init({ duration: 1600 });
  }, []);

  return (
    <div id={id} className="flex flex-col w-full py-5 xl:mt-18 text-white gap-8">
      <div data-aos="fade" data-aos-delay="400">
        <Title
          title="¿Quienes somos?"
          className="items-center justify-center"
        />
      </div>

      <p
        className="xl:w-[70%] w-[90%] mx-auto xl:text-[24px] text-lg text-center xl:text-start leading-relaxed drop-shadow-[6px_6px_8px_rgba(255,255,255,0.8)]"
        data-aos="fade"
        data-aos-delay="600"
      >
        En <b>Padel GEVP</b> no somos solo un club, somos una comunidad. Nacimos
        del esfuerzo y la pasión de un grupo de personas que creen en el deporte
        como un punto de encuentro, en la amistad como un valor fundamental y en
        el trabajo hecho con el corazón como nuestra mayor diferencia.
        <br />
        <br />
        Somos un proyecto a pulmón, construido y mantenido por nosotros mismos,
        con el compromiso de ofrecer un espacio donde cada jugador se sienta
        parte de algo más grande. Desde el primer ladrillo hasta el último
        detalle en la cancha, todo lo que ves es fruto del esfuerzo, la
        dedicación y el amor por este deporte.
        <br />
        <br />
        En <b>Padel GEVP</b>, estamos presentes todos los días, asegurándonos de
        que cada experiencia dentro y fuera de la cancha sea especial. Porque
        más que un club, somos un barrio, una familia y un sueño hecho realidad.
        ¡Te esperamos para ser parte de esta historia!
      </p>
    </div>
  );
}

export default Nosotros;
