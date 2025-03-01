// import Title from "../../commons/Title";
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
          <p className="text-xl font-bold text-gray-600 mb-4">
            Disfruta de nuestras canchas de padel de primer nivel
          </p>
          <div className="flex xl:flex-row flex-col w-full justify-center xl:gap-0 gap-4">
            {/* Columna Izquierda */}
            <div className="flex flex-col text-start xl:w-1/2 xl:pr-4">
              <p className="flex mx-auto text-xl font-bold text-black mb-4">
                Lunes a Viernes
              </p>
              <div className="flex flex-col">
                <p className="text-base font-bold text-gray-600 mb-4 underline">
                  De 8hs a 16hs:
                </p>
                <div className="flex gap-2">
                  <p className="font-bold text-gray-600">1 hora:</p>
                  <div className="flex flex-col text-start">
                    <p className="text-base font-bold text-green-700 mb-2 flex gap-1">
                      <span className="text-base font-bold text-gray-800">
                        Socios:
                      </span>
                      $22.000
                    </p>
                    <p className="text-base font-bold text-green-700 mb-2 flex gap-1">
                      <span className="text-base font-bold text-gray-800">
                        No socios:
                      </span>
                      $25.000
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <p className="font-bold text-gray-600">1:30 horas:</p>
                  <div className="flex flex-col text-start">
                    <p className="text-base font-bold text-green-700 mb-2 flex gap-1">
                      <span className="text-base font-bold text-gray-800">
                        Socios:
                      </span>
                      $27.000
                    </p>
                    <p className="text-base font-bold text-green-700 mb-2 flex gap-1">
                      <span className="text-base font-bold text-gray-800">
                        No socios:
                      </span>
                      $32.000
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-base font-bold text-gray-600 mb-4 underline">
                  De 16hs a 23:30hs:
                </p>
                <div className="flex gap-2">
                  <p className="font-bold text-gray-600">1 hora:</p>
                  <div className="flex flex-col text-start">
                    <p className="text-base font-bold text-green-700 mb-2 flex gap-1">
                      <span className="text-base font-bold text-gray-800">
                        Socios:
                      </span>
                      $27.000
                    </p>
                    <p className="text-base font-bold text-green-700 mb-2 flex gap-1">
                      <span className="text-base font-bold text-gray-800">
                        No socios:
                      </span>
                      $32.000
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <p className="font-bold text-gray-600">1:30 horas:</p>
                  <div className="flex flex-col text-start">
                    <p className="text-base font-bold text-green-700 mb-2 flex gap-1">
                      <span className="text-base font-bold text-gray-800">
                        Socios:
                      </span>
                      $34.000
                    </p>
                    <p className="text-base font-bold text-green-700 mb-2 flex gap-1">
                      <span className="text-base font-bold text-gray-800">
                        No socios:
                      </span>
                      $40.000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Divisor */}
            <div className="border-l-2 border-gray-400 h-auto xl:flex hidden"></div>

            {/* Columna Derecha */}
            <div className="flex flex-col text-start xl:w-1/2 xl:pl-4">
              <p className="flex mx-auto text-xl font-bold text-black mb-4">
                Sábado
              </p>
              <div className="flex flex-col">
                <p className="text-base font-bold text-gray-600 mb-4 underline">
                  De 8hs a 23:30hs:
                </p>
                <div className="flex gap-2">
                  <p className="font-bold text-gray-600">1 hora:</p>
                  <div className="flex flex-col text-start">
                    <p className="text-base font-bold text-green-700 mb-2 flex gap-1">
                      <span className="text-base font-bold text-gray-800">
                        Socios:
                      </span>
                      $27.000
                    </p>
                    <p className="text-base font-bold text-green-700 mb-2 flex gap-1">
                      <span className="text-base font-bold text-gray-800">
                        No socios:
                      </span>
                      $32.000
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <p className="font-bold text-gray-600">1:30 horas:</p>
                  <div className="flex flex-col text-start">
                    <p className="text-base font-bold text-green-700 mb-2 flex gap-1">
                      <span className="text-base font-bold text-gray-800">
                        Socios:
                      </span>
                      $34.000
                    </p>
                    <p className="text-base font-bold text-green-700 mb-2 flex gap-1">
                      <span className="text-base font-bold text-gray-800">
                        No socios:
                      </span>
                      $40.000
                    </p>
                  </div>
                </div>
              </div>
              <p className="flex mx-auto text-xl font-bold text-black mb-4">
                Domingo
              </p>
              <div className="flex flex-col">
                <p className="text-base font-bold text-gray-600 mb-4 underline">
                  De 8hs a 20hs:
                </p>
                <div className="flex gap-2">
                  <p className="font-bold text-gray-600">1 hora:</p>
                  <div className="flex flex-col text-start">
                    <p className="text-base font-bold text-green-700 mb-2 flex gap-1">
                      <span className="text-base font-bold text-gray-800">
                        Socios:
                      </span>
                      $27.000
                    </p>
                    <p className="text-base font-bold text-green-700 mb-2 flex gap-1">
                      <span className="text-base font-bold text-gray-800">
                        No socios:
                      </span>
                      $32.000
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <p className="font-bold text-gray-600">1:30 horas:</p>
                  <div className="flex flex-col text-start">
                    <p className="text-base font-bold text-green-700 mb-2 flex gap-1">
                      <span className="text-base font-bold text-gray-800">
                        Socios:
                      </span>
                      $34.000
                    </p>
                    <p className="text-base font-bold text-green-700 mb-2 flex gap-1">
                      <span className="text-base font-bold text-gray-800">
                        No socios:
                      </span>
                      $40.000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-center mt-[5%] mb-[3%]">
            <Button1
              text="Reservar"
              bg="bg-blue-gradient"
              textColor="text-[#fff]"
              url="https://reservaspadelgevp.as.me/"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Precios;
