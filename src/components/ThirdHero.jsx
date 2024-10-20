import React from "react";

import arrowFeatherLeft from "../assets/images/feather_arrow-left.png";
import arrowFeatherRight from "../assets/images/feather_arrow-right1.png";
import RoundButton from "../components/RoundButton";
import titik from "../assets/images/Titik-titik.png";
import TeamPicture from "../components/TeamPicture";
import HeadedArticle from "./HeadedArticle";

const ThirdHero = ({
  title,
  header,
  content,
  pictureUrl,
  pictureName,
  picturePortforlio,
}) => {
  return (
    <section className=" mb-20 p-6 lg:w-[80%] lg:mx-auto lg:flex lg:justify-between lg:gap-5">
      <HeadedArticle title={title} header={header} content={content} />
      <div className="relative">
        <TeamPicture
          imgUrl={pictureUrl}
          picName={pictureName}
          picPortfolio={picturePortforlio}
        />
        <div className="flex gap-10 justify-end m-8 mr-32">
          <RoundButton imgUrl={arrowFeatherLeft} />
          <RoundButton imgUrl={arrowFeatherRight} />
        </div>
        <img
          className="hidden lg:block absolute top-0 right-0 -z-10 h-auto w-[267px]"
          src={titik}
          alt="tikitak"
        />
      </div>
    </section>
  );
};

export default ThirdHero;
