import React from "react";
import {
  FaEnvelopeSquare,
  FaGithubSquare,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

export const Footer = () => {
  return (
    <div className="bg-gray-700 dark:bg-gray-800 text-white dark:text-gray-300">
      <div className="container py-4 grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <div className=" p-4">
          <h3 className="text-2xl mb-2 text-pink-600 uppercase">
            About project
          </h3>
          <p className="text-lg">
            This is SPA application is for introductory viewing, non-commercial
            purposes <br />
            The project was built using:
          </p>
          <ul className="list-disc list-inside p-2 font-semibold">
            <li>React frontend framework</li>
            <li>Redux Toolkit state manager</li>
            <li>Swiper.js popular slider module</li>
            <li>Tailwind CSS framework</li>
            <li>HeadlessUI unstyled components</li>
            <li>Netlify SPA (Single Page Application) free hosting</li>
            <li>Themoviedb open API of movies, tv shows, people data </li>
          </ul>
          <h3 className="mt-2 text-2xl uppercase text-pink-600">About me</h3>
          <p className="text-lg">
            Hello my name is Kodirov Timur. Thank you for visiting.
            <br />
            I'm frontend developer with 1 year experience in React.
            <br />
            <br />
            Feel free to follow or message me:
          </p>
          <ul className="px-4 py-1 ">
            <li>
              {" "}
              <button className="flex items-center gap-1">
                <FaEnvelopeSquare /> Email
              </button>
            </li>
            <li>
              <button className="flex items-center gap-1">
                {" "}
                <FaLinkedin /> LinkedIn
              </button>
            </li>
            <li>
              <button className="flex items-center gap-1">
                {" "}
                <FaGithubSquare />
                GitHub
              </button>
            </li>
            <li>
              <button className="flex items-center gap-1">
                {" "}
                <FaTelegram />
                Telegram
              </button>
            </li>
            <li>
              <button className="flex items-center gap-1">
                {" "}
                <SiCodewars />
                Codewars
              </button>
            </li>
          </ul>
        </div>
        <div className=" p-4 flex flex-col  ">
          <div className=" flex flex-col justify-center md:justify-start">
            <h3 className=" text-2xl uppercase text-pink-600">Pages</h3>
            <ul className="p-2">
              <li>Movies</li>
              <li>Shows</li>
              <li>People</li>
              <li>Search</li>
            </ul>
            <br />
          </div>
          <div className="">
            <h3 className="text-2xl uppercase text-pink-600 ">Copyright</h3>
            <p className="text-lg mb-2">
              All movies, tv shows and people information was provided by{" "}
              <strong className="uppercase">Themoviedb</strong>
            </p>
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt=""
              className="w-1/2 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
