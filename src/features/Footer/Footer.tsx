import React from "react";
import {
  FaEnvelopeSquare,
  FaGithubSquare,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
import { SiCodewars } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { links } from "../Menu/links";

const contacts = [
  {
    name: "email",
    icon: FaEnvelopeSquare,
    link: "stimka91@gmail.com",
  },
  {
    name: "linkedin",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/timur-kodirov-83128b14b/",
  },
  {
    name: "github",
    icon: FaGithubSquare,
    link: "https://github.com/timmeno1",
  },
  {
    name: "telegram",
    icon: FaTelegram,
    link: "https://t.me/tim356/",
  },
  {
    name: "codewars",
    icon: SiCodewars,
    link: "https://www.codewars.com/users/timmeno1",
  },
];

const stack = [
  {
    name: "React",
    link: "https://reactjs.org",
    description: "frontend framework",
  },
  {
    name: "Redux Toolkit",
    link: "https://redux-toolkit.js.org/",
    description: "state manager",
  },
  {
    name: "Swiper.js",
    link: "https://swiperjs.com/",
    description: "popular slider module",
  },
  {
    name: "Tailwind",
    link: "https://tailwindcss.com/",
    description: "CSS framework",
  },
  {
    name: "HeadlessUI",
    link: "https://headlessui.dev/",
    description: "unstyled components",
  },
  {
    name: "Netlify",
    link: "https://www.netlify.com/",
    description: "SPA (Single Page Application) hosting",
  },
  {
    name: "Themoviedb",
    link: "https://www.themoviedb.org/",
    description: "open API of movies, tv shows, people data",
  },
];

export const Footer = () => {
  const navigate = useNavigate();

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
          <ul className="list-disc list-inside p-2">
            {stack.map((tech, i) => (
              <li key={i}>
                <a href={tech.link}
                  className="font-semibold hover:text-pink-600 transition-colors duration-300 cursor-pointer"
                >
                  {tech.name}
                </a>
                {" " + tech.description}
              </li>
            ))}
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
            {contacts.map((contact, i) => {
              const Icon = contact.icon;
              return (
<li
                  key={i}>
                <a className="hover:text-pink-600 transition-colors duration-300 cursor-pointer capitalize w-fit flex items-center gap-1"
                  href={
                    contact.name !== "email"
                      ? contact.link
                      : "mailto:" + contact.link
                  }
                > <Icon /> {" " + contact.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" p-4 flex flex-col  ">
          <div className=" flex flex-col justify-center md:justify-start">
            <h3 className=" text-2xl uppercase text-pink-600">Pages</h3>
            <ul className="p-2">
              {links.map((link, i) => (
                <li
                  key={i}
                  onClick={() => {
                    navigate(link);
                    window.scrollTo({top:0, behavior:"smooth"})
                  }}
                  className="hover:text-pink-600 transition-colors duration-300 cursor-pointer capitalize"
                >
                  {link}
                </li>
              ))}
            </ul>
            <br />
          </div>
          <div className="">
            <h3 className="text-2xl uppercase text-pink-600 ">Copyright</h3>
            <p className="text-lg mb-2">
              All movies, tv shows and people information was provided by{" "}
              <a href="https://www.themoviedb.org/" target={"_blank"} rel="noreferrer">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt=""
              className="h-12"
            /></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
