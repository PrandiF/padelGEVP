type button1Props = {
  text: string;
  textColor: string;
  bg: string;
  url?: string;
};

function Button1({ text, bg, textColor, url }: button1Props) {
  return (
    <a
      target="_blank"
      href={url}
      className={`${bg} rounded-xl text-center font-bold xl:text-xl text-lg flex hover:scale-105 transition-all duration-200 z-10 py-2 px-6 shadow-xl`}
    >
      <p className={`${textColor}`}>{text}</p>
    </a>
  );
}

export default Button1;
