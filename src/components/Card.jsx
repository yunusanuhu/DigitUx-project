import PlainButton from "./PlainButton";
import featherRight from "../assets/images/feather_chevron-right.png";
const Card = ({ heading, content }) => {
  return (
    <div /*className="w-[222px] h-[246px]"*/>
      <h1 className="text-blue-700 leading-8 font-bold text-2xl ">{heading}</h1>
      <p className="text-lg text-gray-600 font-medium mt-5 mb-5">{content}</p>
      <PlainButton label="Learn More" imgUrl={featherRight} />
    </div>
  );
};

export default Card;
