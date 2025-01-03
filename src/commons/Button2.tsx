import { Link } from "react-scroll";

// import { useNavigate } from "react-router-dom";
type button1Props = {
  text: string;
  textColor: string;
  bg: string;
  url?: string;
  scroll: string;
};

function Button2({ text, bg, textColor, scroll }: button1Props) {
  // const navigate = useNavigate();
  return (
    <Link
      // onClick={() => navigate(`${url}`)}
      to={scroll}
      smooth="true"
      className={`${bg} rounded-xl text-center font-bold xl:text-xl text-lg flex hover:scale-105 transition-all duration-200 z-10 py-2 px-6 shadow-xl hover:cursor-pointer`}
    >
      <p className={`${textColor}`}>{text}</p>
    </Link>
  );
}

export default Button2;
