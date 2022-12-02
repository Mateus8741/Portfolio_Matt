import React from "react";

function Hero() {
  return (
    <>
      <div
        className="relative heroElem w-full pt-20 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <p className="text-5xl mb-5">Olá 👋.</p>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
        Me chamo <span className="heroShiny1 text-purple-800">Mateus Tavares</span> Desenvolvedor{" "}
          <span className="heroShiny2 text-purple-800">Front-end</span>
          <img
            className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]"
            style={{ animationDelay: "0.1s" }}
            src="/static/doodles/hero/html.svg"
          />
          <img
            className="sqD squiggle-hero-nextjs hidden top-[75px] right-0 w-11"
            style={{ animationDelay: "0.2s" }}
            src="/static/doodles/hero/nextjs.svg"
          />
          <img
            className="sqD bottom-[-300px] -right-1/4 sm:right-[-20%] lg:bottom-[-310px] lg:right-[-10px] w-[150px]"
            style={{ animationDelay: "0.3s" }}
            src="/static/doodles/hero/js.svg"
          />
          <img
            className="sqD hidden sm:block bottom-[-340px] left-[-100px]"
            style={{ animationDelay: "0.4s" }}
            src="/static/doodles/hero/coder.svg"
          />
          <img
            className="sqD bottom-[-320px] right-[65%] sm:right-[45%]"
            style={{ animationDelay: "0.6s" }}
            src="/static/doodles/hero/dino.svg"
          />
          <img
            className="sqD right-[-60px] sm:right-0 bottom-[-180px] lg:[5%]"
            style={{ animationDelay: "0.7s" }}
            src="/static/doodles/hero/paintbrush.svg"
          />
          <img
            className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40"
            style={{ animationDelay: "0.9s" }}
            src="/static/doodles/hero/code.svg"
          />
        </h1>
      </div>
        <div className="flex justify-center gap-4  px-5 sm:flex-col sm:items-center md:flex-row xl:flex-row">
          <div className="cursor-pointer font-bold whitespace-nowrap px-8 py-2  text-fun-white border-2 text-xl rounded-full border-fun-white hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
            <a href="https://github.com/Mateus8741">Git hub</a>
          </div>
          <div className="cursor-pointer font-bold whitespace-nowrap px-8 py-2  text-fun-white border-2 text-xl rounded-full border-fun-white hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
            <a href="https://www.linkedin.com/in/mateus-tavares-2382911a0/">Linkedin</a>
          </div>
          <div  className="cursor-pointer font-bold whitespace-nowrap px-8 py-2  text-fun-white border-2 text-xl rounded-full border-fun-white hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
            <a href="mailto:mateus_sousa_tavares@hotmail.com">Email</a>
          </div>
        </div>
    </>
  );
}

export default Hero;
