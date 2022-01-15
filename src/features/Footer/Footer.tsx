import React from "react";
import { FaEnvelopeSquare, FaGithubSquare, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { SiCodewars } from 'react-icons/si'

export const Footer = () => {
  return (
    <div className="bg-gray-700 dark:bg-gray-800 text-white">
      <div className="container py-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className=" p-4">
          <h3 className="text-2xl mb-2 uppercase">About project</h3>
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
            <li>
              Themoviedb open API of movies, tv shows, people data{" "}
            </li>
          </ul>
          <h3 className="mt-2 text-2xl uppercase">About me</h3>
          <p className="text-lg">
            Hello my name is Kodirov Timur. Thank you for visiting.
            <br />
            I'm frontend developer with 1 year experience in React.
            <br />
            <br />
            Feel free to follow or message me:
          </p>
              <ul className="px-4 py-1 ">
                <li> <button className="flex items-center gap-1" ><FaEnvelopeSquare /> Email</button></li>
                <li><button className="flex items-center gap-1" > <FaLinkedin /> LinkedIn</button></li>
                <li><button className="flex items-center gap-1" > <FaGithubSquare />GitHub</button></li>
                <li><button className="flex items-center gap-1" > <FaTelegram />Telegram</button></li>
                <li><button className="flex items-center gap-1" > <SiCodewars />Codewars</button></li>
              </ul>
        </div>
        <div className=" p-4 flex flex-col justify-center items-center">
          <h3 className="text-2xl mb-2 ">All media and text was provided by www.themoviedb.org</h3>
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt=""
            className="w-1/2 "
          />
        </div>
      </div>
    </div>
  );
};
