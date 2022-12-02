import Link from "next/link";
import React from "react";
import { footer } from "@/data/global";
import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col w-screen px-5 pt-5 pb-5 mt-5 z-5">
      <div className="w-full max-w-3xl m-auto flex justify-around items-start px-4">
        {footer.columns.map((item, index) => {
          return (
            <div key={index} className="text-left mb-5 sm:mb-0">
              <h4 className="uppercase text-purple-900 text-sm font-bold">
                {item.title}
              </h4>
              <div>
                {item.links.map((item, index) => {
                  return (
                    <div key={index} className="my-2.5">
                      {item.leavesWebsite ? (
                        <a
                          href={item.link}
                          target="_blank"
                          className="items-center flex"
                        >
                          {item.icon && (
                            <span className="pr-2 -mb-1">
                              <Image src={item.icon} width={20} height={20} />
                            </span>
                          )}
                          {item.name}
                        </a>
                      ) : (
                        <Link href={item.link}>{item.name}</Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-purple-900">
        <p className="flex flex-col items-center justify-center ">
          <div className="mt-2 text-xs ">
            Made by{" "}
            <a
              href="mailto:mateus_sousa_tavares@hotmail.com"
              className="text-fun-gray-light font-medium hover:text-purple-800"
            >
              Mateus Tavares
            </a>
            ⚡
          </div>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
