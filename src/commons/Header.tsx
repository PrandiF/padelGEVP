import logo from "/assets/gevpPadelLogo2.webp";
import { Link } from "react-scroll";

function Header() {
  return (
    <div className="w-screen relative xl:flex hidden py-5 xl:px-10 md:px-8 px-2 z-30 xl:justify-between">
      <div className="flex">
        <img src={logo} className="w-[80px] rounded-xl" />
      </div>
      <div className="xl:flex hidden xl:gap-6 gap-3 items-center font-semibold xl:text-xl text-lg font-titilliumWeb">
        <Link
          className="cursor-pointer hover:underline"
          to="HOME"
          smooth="true"
        >
          Inicio
        </Link>
        <Link
          className="cursor-pointer hover:underline"
          to="NOSOTROS"
          smooth="true"
        >
          Nosotros
        </Link>
        <Link
          className="cursor-pointer hover:underline"
          to="GALERIA"
          smooth="true"
        >
          Galería
        </Link>
        <Link
          className="cursor-pointer hover:underline"
          to="PRECIOS"
          smooth="true"
        >
          Más Info
        </Link>
      </div>
    </div>
  );
}

export default Header;
