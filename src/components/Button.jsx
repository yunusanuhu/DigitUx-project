const Button = ({ label, imgUrl }) => {
  return (
    <button className="w-full lg:w-auto flex justify-center items-center gap-1 p-3 text-xl bg-blue-600 rounded-md text-white">
      {label}

      <img
        className={imgUrl ? "display " : "hidden"}
        src={imgUrl}
        alt="feather message"
        width={18}
        height={18}
      />
    </button>
  );
};

export default Button;
