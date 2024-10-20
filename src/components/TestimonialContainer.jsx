import testimonialMale from "../assets/images/testimonial_male.png";
import testimonialFemale from "../assets/images/testimonial_female.png";
import Testimonial from "../components/Testimonial";
import RoundButton from "../components/RoundButton";
import arrowFeatherLeft from "../assets/images/feather_arrow-left.png";
import arrowFeatherRight from "../assets/images/feather_arrow-right1.png";

const TestimonialContainer = () => {
  return (
    <section className="bg-slate-100 py-10">
      <div className="p-6 lg:w-[80%] mx-auto">
        <h2 className="font-bold text-blue-600 text-xl capitalize ">
          Testmonial
        </h2>
        <h1 className="text-black text-2xl lg:text-4xl font-bold mt-6 mb-10 leading-normal">
          You still hesitate about working with Us ?
          <br className="hidden lg:block" />
          Check what They say about Us
        </h1>
        <div className="flex flex-row justify-evenly items-center">
          <div>
            <Testimonial
              paragraph="Our team of digital product creators and Tch Bring Skilled will take
        your idea to the next level and help you with your product"
              imgUrl={testimonialMale}
              name="Smail yefsssah"
              rank="CEO Innova"
            />
          </div>
          <div className="hidden lg:block">
            <Testimonial
              paragraph="Our team of digital product creators and Tch Bring Skilled will take
        your idea to the next level and help you with your product"
              imgUrl={testimonialFemale}
              name="Djamila Malak"
              rank="Co-Founder RobaKabyle"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-20 my-10">
          <RoundButton imgUrl={arrowFeatherLeft} />
          <RoundButton imgUrl={arrowFeatherRight} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialContainer;
