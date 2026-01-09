import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type GoogleMapProps = {
  id?: string;
};

export default function GoogleMap({ id }: GoogleMapProps) {
  useEffect(() => {
    AOS.init({ duration: 1600, once: true });
  }, []);

  return (
    <section id={id} className="w-full relative z-20">
      <div className="container mx-auto px-6 text-center">
        {/* <div
          className="bg-container-gradient shadow-2xl rounded-lg p-8 mb-8 mt-6"
          data-aos="fade"
          data-aos-delay="400"
        > */}

        <a
          href="https://www.google.com/maps/place/Pádel+GEVP/data=!4m2!3m1!1s0x0:0x537b9c2394264d19"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg overflow-hidden shadow-md"
        >
          <iframe
            src="https://www.google.com/maps?q=Pádel+GEVP&output=embed"
            width="100%"
            height="450"
            style={{ border: 0, pointerEvents: "none" }}
            loading="lazy"
          />
        </a>

        <p className="text-white mt-4">
          Tocá el mapa para abrir la ubicación en Google Maps
        </p>
      </div>
      {/* </div> */}
    </section>
  );
}
