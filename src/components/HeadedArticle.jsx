import React from "react";

const HeadedArticle = ({ title, header, content }) => {
  return (
    <div className="max-width:[500px]">
      <h2 className="font-bold text-blue-600 text-xl capitalize ">{title}</h2>
      <h1 className="text-black text-4xl font-bold mt-6 mb-10 lg:max-w-[500px]">
        {header}
      </h1>
      <p className="text-xl leading-8 text-slate-600 lg:max-w-[500px]">
        {content}
      </p>
    </div>
  );
};

export default HeadedArticle;
