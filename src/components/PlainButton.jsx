const PlainButton = ({ label, imgUrl }) => {
  return (
    <button className="px-4 py-2 rounded-md text-blue-600 font-semibold border-4 border-blue-600 leading-8 flex justify-center items-center gap-1">
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

export default PlainButton;
