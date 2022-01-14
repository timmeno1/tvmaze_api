import React from "react";

export const Footer = () => {
  return (
    <div className="bg-gray-700 text-white">
        <div className="container grid grid-cols-1 md:grid-cols-2">
            <div>
              <h3>about me</h3>
              <p>I'm frontend developer with 1 year experience in React 
                this site was built using:
              </p>
                <ul>
                  <li>React frontend framework</li>
                  <li>Redux Toolkit state manager</li>
                  <li>Swiper.js popular slider module</li>
                  <li>Tailwind CSS framework</li>
                  <li>HeadlessUI unstyled components</li>
                  <li>Netlify SPA (Single Page Application) free hosting</li>
                  <li>www.themoviedb.org open API of movies, tv shows, people data </li>
                </ul>
            </div>
            <div>
              All media and text was provided by www.themoviedb.org 
              <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="" />
            </div>
        </div>
    </div>
  );
};