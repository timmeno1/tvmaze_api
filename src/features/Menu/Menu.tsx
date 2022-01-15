import { Popover } from "@headlessui/react";
import React, { useState } from "react";
import {
  HiOutlineMoon,
  HiOutlineSearch,
  HiOutlineSun,
} from "react-icons/hi";
import { usePopper } from "react-popper";
import { MobileMenu } from "./MobileMenu";

type MenuPropsType = {
  setIsDark: (p: boolean) => void;
  isDark: boolean;
};

export const Menu = (props: MenuPropsType) => {
  const [referenceSearchBtn, setReferenceSearchBtn] =
    useState<HTMLButtonElement | null>(null);
  const [popperSearch, setPopperSearch] = useState<HTMLDivElement | null>();
  const { styles, attributes } = usePopper(referenceSearchBtn, popperSearch, {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 2],
        },
      },
    ],
  });
  const setDarkTheme = (dark: boolean) => {
    if (dark) {
      // Whenever the user explicitly chooses dark mode
      localStorage.theme = "dark";
      props.setIsDark(true);
    } else {
      // Whenever the user explicitly chooses light mode
      localStorage.theme = "light";
      props.setIsDark(false);
    }
  };

  return (
    <nav className="sticky shadow-md z-10 top-0 w-full bg-white md:bg-opacity-90 flex flex-col justify-center py-3 md:py-6 lg:text-lg dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto flex flex-row justify-around px-6">
        <button className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white fill-gray-600 h-6 lg:h-8 "
            viewBox="0 0 177.34 27"
          >
            <g id="logo">
              <metadata id="logo" />
              <path d="M9.94 26.17l0 -13.85 -9.94 -11.98 2.54 0 8.45 10.21 8.44 -10.21 2.55 0 -9.94 11.98 0 13.85 -2.1 0zm21.04 0l0 -23.98 -9.53 0 0 -1.85 21.27 0 0 1.85 -9.53 0 0 23.98 -2.21 0zm36.52 -22.16c-1.77,-1.2 -3.7,-2.12 -5.88,-2.12 -2.87,0 -5.29,1.82 -5.29,4.83 0,1.14 0.31,2.06 0.95,2.78 0.63,0.71 1.99,1.54 4.1,2.41 1.64,0.68 4.11,1.71 5.3,3.03 1.13,1.27 1.69,2.86 1.69,4.55 0,2.06 -0.72,3.75 -2.13,5.07 -1.42,1.32 -3.24,1.99 -5.45,1.99 -2.44,0 -4.63,-0.93 -6.61,-2.3l0 -2.51c1.87,1.46 4.13,2.8 6.57,2.8 3.22,0 5.44,-1.83 5.44,-5.15 0,-1.17 -0.33,-2.13 -1,-2.87 -0.66,-0.74 -2.17,-1.62 -4.54,-2.61 -2.45,-1.03 -4.13,-2.05 -5.03,-3.1 -0.9,-1.03 -1.35,-2.36 -1.35,-3.98 0,-2 0.68,-3.64 2.05,-4.92 1.37,-1.28 3.17,-1.91 5.38,-1.91 2.11,0 4,0.61 5.8,1.71l0 2.3zm5.1 22.16l0 -25.83 2.07 0 0 11.95 17.02 0 0 -11.95 2.07 0 0 25.83 -2.07 0 0 -12.07 -17.02 0 0 12.07 -2.07 0zm63.5 -4.36l7.58 -21.47 0.75 0 7.8 21.47 7.52 -21.47 2.22 0 -9.59 26.28 -0.43 0 -7.87 -21.7 -7.8 21.7 -0.4 0 -9.8 -26.28 2.25 0 7.77 21.47zm40.37 -17.8c-1.76,-1.2 -3.69,-2.12 -5.87,-2.12 -2.88,0 -5.3,1.82 -5.3,4.83 0,1.14 0.32,2.06 0.95,2.78 0.64,0.71 2,1.53 4.1,2.41 1.64,0.68 4.12,1.71 5.31,3.03 1.13,1.27 1.68,2.86 1.68,4.55 0,2.06 -0.71,3.75 -2.13,5.07 -1.42,1.32 -3.24,1.99 -5.44,1.99 -2.45,0 -4.63,-0.93 -6.62,-2.3l0 -2.51c1.87,1.46 4.14,2.8 6.58,2.8 3.22,0 5.44,-1.83 5.44,-5.15 0,-1.17 -0.34,-2.13 -1,-2.87 -0.67,-0.74 -2.18,-1.62 -4.55,-2.61 -2.44,-1.03 -4.12,-2.05 -5.03,-3.1 -0.9,-1.03 -1.35,-2.36 -1.35,-3.98 0,-2 0.69,-3.64 2.06,-4.92 1.37,-1.28 3.17,-1.91 5.37,-1.91 2.12,0 4.01,0.61 5.8,1.71l0 2.3z" />
              <path
                className="fil1 str0"
                d="M111.53 1.15c6.85,0 12.4,5.55 12.4,12.4 0,6.85 -5.55,12.4 -12.4,12.4 -6.85,0 -12.41,-5.55 -12.41,-12.4 0,-6.85 5.56,-12.4 12.41,-12.4z"
              />
              <polygon
                className="fil2"
                points="118.2,13.95 112.89,16.6 107.57,19.26 107.57,13.95 107.57,8.63 112.89,11.29 "
              />
            </g>
          </svg>
        </button>
        {
          //  desktop menu layout
        }
        <div className=" hidden md:flex flex-row md:justify-start w-1/2">
          <button className="hover:text-pink-600 py-1 px-3 uppercase">
            Shows
          </button>
          <button className="hover:text-pink-600 py-1 px-3 uppercase">
            Movies
          </button>
          <button className="hover:text-pink-600 py-1 px-3 uppercase">
            Trending
          </button>
          <button className="hover:text-pink-600 py-1 px-3 uppercase">
            People
          </button>
        </div>
        <div className="hidden md:flex flex-row items-center justify-end space-x-4 ">
          <button className="cursor-pointer">
            {!props.isDark ? (
              <HiOutlineMoon
                onClick={() => {
                  setDarkTheme(true);
                }}
                className="h-6 w-6 text-pink-600 "
              />
            ) : (
              <HiOutlineSun
                onClick={() => {
                  setDarkTheme(false);
                }}
                className="h-6 w-6 "
              />
            )}
          </button>
          <Popover className="">
            <Popover.Button
              ref={setReferenceSearchBtn}
              className={
                "flex flex-row items-center space-x-4 py-1 px-3 rounded-md bg-pink-600 text-white hover:bg-gray-600 transition-colors duration-300 "
              }
            >
              <span>Search</span>
              <HiOutlineSearch className=" h-6 w-6 " />
            </Popover.Button>

            <Popover.Panel
              ref={setPopperSearch}
              style={styles.popper}
              {...attributes.popper}
              className="  text-white z-10"
            >
              <div className="container mx-auto">
                <input
                  autoFocus
                  type="text"
                  className="rounded-md  mt-2 px-3 py-1 text-gray-600 outline outline-1 outline-gray-600"
                />
              </div>
            </Popover.Panel>
          </Popover>
        </div>

        <MobileMenu isDark={props.isDark} setDarkTheme={setDarkTheme} />
      </div>
    </nav>
  );
};
