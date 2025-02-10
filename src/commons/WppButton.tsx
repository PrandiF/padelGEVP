import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "5491173686929";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=Hola,%20quiero%20reservar%20una%20cancha.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed xl:bottom-6 xl:right-6 bottom-4 right-2 bg-green-500 text-white xl:p-4 p-3 rounded-full 
                 shadow-lg hover:scale-110 transition duration-300 flex items-center justify-center z-50"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsAppButton;
