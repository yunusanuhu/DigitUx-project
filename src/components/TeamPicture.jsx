import React from "react";

const TeamPicture = ({ imgUrl, picName, picPortfolio }) => {
  return (
    <div>
      <img src={imgUrl} alt="team picture" className="mr-32 mt-10 w-[350px]" />
      <p className="text-black text-xl font-bold my-5">{picName}</p>
      <p className="text-slate-600 font-semibold mb-5">{picPortfolio}</p>
    </div>
  );
};

export default TeamPicture;
