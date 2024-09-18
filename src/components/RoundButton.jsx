const RoundButton = ({ imgUrl }) => {
  return (
    <div className="border-2 border-blue-600 inline-block rounded-full p-4">
      <img src={imgUrl} alt="arrow button" />
    </div>
  );
};

export default RoundButton;
