import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <a
      href="#"
      onClick={handleScrollToTop}
      className="flex py-3 px-2 bg-white text-black justify-center items-center text-lg fixed bottom-[20px] right-[20px] shadow-lg z-50 rounded-lg hover:bg-gray-300 transition duration-300"
      
    >
      <FaArrowUp />
    </a>
  );
}

export default ScrollToTop;
