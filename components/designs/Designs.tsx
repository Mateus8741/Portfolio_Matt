import React from "react";
import { designs } from "@/data/content/designs";

function Designs() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start px-4">
      {designs.map((item, index) => {
        return (
          <figure
            key={index}
            className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 px-4 border border-purple-800 overflow-hidden"
          >
            <img
              className="w-8 h-w-8 md:w-auto md:h-24 md:rounded-none rounded-full "
              src={item.img}
            />
            <div className="pt-6 md:p-3 text-center md:text-left flex flex-col justify-around">
              <blockquote>
                <p className="text-lg font-medium">{item.label}</p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-fun-gray-medium">{item.duration}</div>
              </figcaption>
            </div>
          </figure>
        );
      })}
    </div>
  );
}

export default Designs;
