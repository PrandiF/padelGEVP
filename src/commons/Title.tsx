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
      className={`relative flex xl:pb-4 ${className} w-full`}
      data-aos="fade"
      data-aos-duration="1600"
    >
      <h3 className="font-bold xl:text-[4rem] text-[2rem] opacity-90 tracking-widest drop-shadow-3xl text-[#f2f8fe]">
        {title}
      </h3>
    </div>
  );
}

export default Title;
