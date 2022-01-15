import React from "react";
import { HomePageDivider } from "./HomePageDivider";
import { PopularPeopleSection } from "./PopularPeopleSection";
import { SliderSection } from "./SliderSection";
import { TrendingMoviesSection } from "./TrendingMoviesSection";
import { TrendingTVShowsSection } from "./TrendingTVShowsSection";

export const Home = () => {
  return (
    <div className="dark:bg-gray-400">
      <section className="py-6 mx-auto  preserve-3d" style={{maxWidth:"1920px"}}>
        <SliderSection />
      </section>
      <section className="container mx-auto my-6  preserve-3d">
        <TrendingMoviesSection />
      </section>
      <section className="container mx-auto my-6  preserve-3d">
        <TrendingTVShowsSection />
      </section>
      <section className="my-6 shadow-lg z-10 ">
        <HomePageDivider />
      </section>
      <section className="container mx-auto  preserve-3d">
        <PopularPeopleSection />
      </section>
    </div>
  );
};
