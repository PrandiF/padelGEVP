//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type TitleProps = {
  title: string;
  comment?: string;
  className?: string;
};

function Title({ title, className }: TitleProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className={`relative flex xl:pb-4 ${className} w-full leading-relaxed drop-shadow-[2px_2px_4px_rgba(255,255,255,0.8)]`}
      data-aos="fade"
      data-aos-duration="1600"
    >
      <h3 className="font-bold xl:text-[4rem] sm:text-[3rem] text-[2rem] opacity-90 tracking-widest drop-shadow-3xl text-[#f2f8fe]">
        {title}
      </h3>
    </div>
  );
}

export default Title;
