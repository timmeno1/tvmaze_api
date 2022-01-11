import React from "react";
import { HomePageDivider } from "./HomePageDivider";
import { PopularPeopleSection } from "./PopularPeopleSection";
import { SliderSection } from "./SliderSection";
import { TrendingMoviesSection } from "./TrendingMoviesSection";
import { TrendingTVShowsSection } from "./TrendingTVShowsSection";

export const Home = () => {
  return (
    <div className=" ">
      <section className="my-3">
        <SliderSection />
      </section>
      <section className="container mx-auto my-3">
        <TrendingMoviesSection />
      </section>
      <section className="container mx-auto my-3">
        <TrendingTVShowsSection />
      </section>
      <section className="my-3 ">
        <HomePageDivider />
      </section>
      <section className="container mx-auto my-3">
        <PopularPeopleSection />
      </section>
    </div>
  );
};
