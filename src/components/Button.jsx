const Button = ({ label, imgUrl }) => {
  return (
    <button className="px-4 py-2 bg-blue-600 rounded-md text-white flex  items-center gap-1">
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
