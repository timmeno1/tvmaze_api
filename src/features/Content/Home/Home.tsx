import React from "react";
import { HomePageDivider } from "./HomePageDivider";
import { PopularPeopleSection } from "./PopularPeopleSection";
import { SliderSection } from "./SliderSection";
import { TrendingMoviesSection } from "./TrendingMoviesSection";
import { TrendingTVShowsSection } from "./TrendingTVShowsSection";

export const Home = () => {


  //const { data, error, isLoading } = useGetTVsQuery(null)
  //const { data, error, isLoading } = useGetPeopleQuery(null)




  return (
    <div className="dark:bg-gray-500">
      <section className="py-6 mx-auto  " style={{ maxWidth: "1920px" }}>
        <SliderSection />
      </section>
      <section className="container mx-auto my-3 md:my-6">
        <TrendingMoviesSection />
      </section>
      <section className="container mx-auto my-5 md:my-9">
        <TrendingTVShowsSection />
      </section>
      <section className="my-3 md:my-6 shadow-lg ">
        <HomePageDivider />
      </section>
      <section className="container mx-auto ">
        <PopularPeopleSection />
      </section>
    </div>
  );
};
