import Footer from "./commons/Footer";
import Header from "./commons/Header";
import HeaderResponsive from "./commons/HeaderResponsive";
import AditionalInfo from "./components/Info/Info";
import Home from "./components/Inicio/Home";
import InstalSection from "./components/Imagenes/ImgSection";
import Precios from "./components/Info/Precios";
// import ScrollToTop from "./commons/ScrollToTop";
import Nosotros from "./components/Nosotros/Nosotros";
import Title from "./commons/Title";
import WhatsAppButton from "./commons/WppButton";

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
        <div className="xl:mt-[12%] mt-[65%] mb-10">
          <Nosotros id="NOSOTROS" />
          <div className="xl:mt-[5%]  mt-[15%]">
            <InstalSection id="GALERIA" />
          </div>

          <div className="xl:mt-[5%] mt-[15%] w-full">
            <Title
              title="La información que necesitás"
              className="items-center justify-center w-full text-center"
            />
          </div>
          <div className="flex flex-col xl:flex-row xl:w-[90%] justify-center mx-auto">
            <Precios id="PRECIOS" />
            <AditionalInfo id="" />
          </div>
        </div>
      </div>

      <WhatsAppButton />
      {/* <ScrollToTop /> */}

      <Footer id="CONTACTO" />
    </div>
  );
}

export default App;
