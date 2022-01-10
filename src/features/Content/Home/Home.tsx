import React from "react";

export const Home = () => {
  return (
    <div className=" text-white">
      <div className="h-32 bg-cyan-700 ">slider</div>
      <div className="container mx-auto">
        <div className="h-32 bg-cyan-700 ">trending movies</div>
      </div>
      <div className="container mx-auto">
        <div className="h-32 bg-cyan-700">trending shows</div>
      </div>
      <div className="h-24 bg-violet-700 ">divider</div>
      <div className="container mx-auto">
        <div className="h-32 bg-cyan-700 container mx-auto">Popular people</div>
      </div>
    </div>
  );
};
