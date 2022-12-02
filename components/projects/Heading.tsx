import React from "react";

type HeadingProps = {
  tag?: string;
};

function Heading({ tag }: HeadingProps) {
  return (
    <div
      className={`${
        tag ? "pt-10 pb-4 sm:pt-24 sm:pb-20" : "py-12 sm:py-20"
      } w-full text-center relative`}
    >
      <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative">
        Projects
        <img
          className="sqD w-10 -top-8 -right-8 absolute"
          src="/static/doodles/hero/code.svg"
        />
      </h1>
      <p className="text-fun-gray text-xl sm:text-2xl max-w-3xl m-auto">
        Aqui estão alguns projetos publicados utilizando React,
        React Native, Next, Angular, Tailwind Css, Axios entre outras...
      </p>
    </div>
  );
}

export default Heading;
