import Footer from "./commons/Footer";
import Header from "./commons/Header";
import HeaderResponsive from "./commons/HeaderResponsive";
// import AditionalInfo from "./components/Info/Info";
import Home from "./components/Inicio/Home";
import InstalSection from "./components/Imagenes/ImgSection";
// import Precios from "./components/Info/Precios";
import Nosotros from "./components/Nosotros/Nosotros";
import Title from "./commons/Title";
import WhatsAppButton from "./commons/WppButton";
import GoogleMap from "./components/GoogleMap";

function App() {
  return (
    <div className="w-screen h-screen">
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent z-10 w-screen xl:flex hidden pointer-events-none" />

      <Header />
      <HeaderResponsive />

      <Home id="HOME" />

      <div className="flex flex-col bg-black relative z-20">
        <div className="xl:mt-[12%] sm:mt-[65%] mt-[75%] mb-10">
          <Nosotros id="NOSOTROS" />

          <div className="xl:mt-[5%] mt-[15%]">
            <InstalSection id="GALERIA" />
          </div>

          {/* <div className="xl:mt-[5%] mt-[15%] w-full">
            <Title
              title="La información que necesitás"
              className="items-center justify-center w-full text-center"
            />
          </div>

          <div className="flex flex-col xl:w-[80%] justify-center mx-auto gap-6">
            <Precios id="PRECIOS" />
            <AditionalInfo id="INFO" />
          </div> */}
          <div className="xl:mt-[5%] mt-[15%] w-full">
            <Title
              title="¿Dónde estamos?"
              className="items-center justify-center w-full text-center"
            />
          </div>
          <div className="xl:mt-[1%] mt-[15%] xl:w-[70%] flex justify-center mx-auto">
            <GoogleMap id="INFO" />
          </div>
        </div>
      </div>

      <WhatsAppButton />
      <Footer id="CONTACTO" />
    </div>
  );
}

export default App;
