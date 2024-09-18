const GridPicture = ({ imgUrl, heading, content }) => {
  return (
    <div>
      <img src={imgUrl} alt="grid picture" />
      <h2 className="font-bold text-blue-600 my-1">{heading}</h2>
      <p>{content}</p>
    </div>
  );
};

export default GridPicture;
