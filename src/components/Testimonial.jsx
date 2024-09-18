const Testimonial = ({ paragraph, imgUrl, name, rank }) => {
  return (
    <div className="max-w-[540px] p-10">
      <p className="text-slate-600 text-xl">{paragraph}</p>
      <div className="mt-10 flex items-center gap-5">
        <img src={imgUrl} alt="male pic" />
        <div className="flex flex-col gap-1">
          <h2 className="text-b font-bold">{name}</h2>
          <p className="font-semibold text-slate-600">{rank}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
