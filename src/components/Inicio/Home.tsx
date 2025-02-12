import Title from "../../commons/Title";
import fondo from "/assets/padelFondo2.avif";
import fondoMobile from "/assets/padel4.webp";
import Button1 from "../../commons/Button1";
import Button2 from "../../commons/Button2";

type HomeProps = {
  id?: string;
};

function Home({ id }: HomeProps) {
  return (
    <section
      className="bg-transparent xl:text-start text-center relative z-30 w-screen mb-[10%]"
      id={id}
    >
      <img
        src={fondo}
        className="w-screen h-[190%] absolute z-0 object-cover xl:flex hidden"
      />
      <img
        src={fondoMobile}
        className="w-screen h-[160%] absolute z-0 object-cover xl:hidden flex "
      />
      <div className="absolute top-0 h-[50%] w-screen bg-gradient-to-b from-black to-transparent z-10" />
      <div className="absolute bottom-[-60%] xl:bottom-[-90%] h-[50%] w-screen bg-gradient-to-t from-black to-transparent z-10" />
      <div className="xl:max-w-3xl xl:px-0 px-2 xl:ml-[5%] xl:mt-[8%] mt-[-5%]">
        <div className="xl:pt-0 pt-[20%]">
          <Title
            title="¡Bienvenidos a Padel GEVP!"
            className="xl:pt-[15%] pt-[55%] xl:pb-0"
          />

          <div className="flex gap-5 xl:items-start items-center xl:justify-start justify-center xl:mt-0 mt-[10px]">
            <Button1
              text="Reservar"
              bg="bg-blue-gradient"
              textColor="text-[#fff]"
              url="https://app.acuityscheduling.com/schedule.php?owner=34815657"
            />
            <Button2
              scroll="PRECIOS"
              text="Mas Info"
              bg="bg-white-gradient"
              textColor="text-[#495057]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
