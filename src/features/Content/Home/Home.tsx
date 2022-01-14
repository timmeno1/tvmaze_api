import React from "react";
import { HomePageDivider } from "./HomePageDivider";
import { PopularPeopleSection } from "./PopularPeopleSection";
import { SliderSection } from "./SliderSection";
import { TrendingMoviesSection } from "./TrendingMoviesSection";
import { TrendingTVShowsSection } from "./TrendingTVShowsSection";

export const Home = () => {
  return (
    <div className="">
      <section className="mb-6 mx-auto" style={{maxWidth:"1920px"}}>
        <SliderSection />
      </section>
      <section className="container mx-auto my-6">
        <TrendingMoviesSection />
      </section>
      <section className="container mx-auto my-6">
        <TrendingTVShowsSection />
      </section>
      <section className="my-3 shadow-lg z-10 my-6">
        <HomePageDivider />
      </section>
      <section className="container mx-auto my-6 ">
        <PopularPeopleSection />
      </section>
    </div>
  );
};
