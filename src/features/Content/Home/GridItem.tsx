type GridItemPropsType = {
  imgUrl: string;
};
export const GridItem = (props: GridItemPropsType) => {
  const circleArray = 24 * 2 * Math.PI;
  const circleProgress = circleArray - (73 / 100) * circleArray;

  return (
    <div className="  text-pink-600 shadow-lg shadow-gray-600/30 shadow-opacity- rounded-lg ring-2 ring-pink-600 ring-opacity-50" >
      <img src={props.imgUrl} alt="" className="rounded-t-lg"/>
      <div className="pt-8 pb-3 px-3 relative">
        <h3 className="text-xl lg:text-2xl font-semibold">
          Resident Evil: Welcome to Raccoon City
        </h3>
        <h4 className=" text-lg lg:text-xl text-gray-600">Dec 15, 2021</h4>
        <div className=" inline-flex  bg-gray-600 bg-opacity-75 items-center justify-center overflow-hidden rounded-full absolute -top-6 right-4">
          <svg className="w-12 h-12 transform -rotate-90">
            <circle
              className="text-gray-300"
              stroke-width="6"
              stroke="currentColor"
              fill="transparent"
              r="22"
              cx="24"
              cy="24"
            />
            <circle
              className="text-green-500"
              stroke-width="6"
              strokeDasharray={circleArray}
              strokeDashoffset={circleProgress}
              stroke-linecap="round"
              stroke="currentColor"
              fill="transparent"
              r="22"
              cx="24"
              cy="24"
            />
          </svg>
          <span
            className="absolute text-sm md:text-base text-white font-semibold "
            x-text="`${percent}%`"
          >
            73%
          </span>
        </div>
      </div>
    </div>
  );
};
