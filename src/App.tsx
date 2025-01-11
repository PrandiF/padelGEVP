import Footer from "./commons/Footer";
import Header from "./commons/Header";
import HeaderResponsive from "./commons/HeaderResponsive";
import AditionalInfo from "./components/Info/Info";
import Home from "./components/Inicio/Home";
import InstalSection from "./components/Imagenes/ImgSection";
import Precios from "./components/Info/Precios";
import ScrollToTop from "./commons/ScrollToTop";

function App() {
  return (
    <div className="w-screen h-screen">
      <div className="absolute  inset-0 bg-gradient-to-b from-black to-transparent z-10 w-screen xl:flex hidden" />

      <Header />
      <HeaderResponsive />
      <div className="flex">
        <Home id="HOME" />
      </div>
      <div className="flex flex-col  bg-black">
        <div className="xl:mt-[12%] mt-[65%]">
          <Precios id="PRECIOS" />
          <InstalSection id="GALERIA" />
          <AditionalInfo id="" />
        </div>
      </div>
      <ScrollToTop />
      <Footer id="CONTACTO" />
    </div>
  );
}

export default App;
