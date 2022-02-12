type GridItemPropsType = {
  title:string | undefined
  imgUrl: string | undefined
  year: number | undefined
  rating:number | undefined
};
export const HomeGridItem = (props: GridItemPropsType) => {
  const rating = props.rating ? props.rating : 0
  const circleArray = 24 * 2 * Math.PI;
  const circleProgress = circleArray - (rating / 100 ) * circleArray;

  return (
    <div className="self-stretch bottom-6 text-pink-600 dark:text-pink-500 shadow-lg bg-white  dark:bg-gray-800 shadow-gray-600/30 rounded-lg ring-2 ring-pink-600 ring-opacity-50">
      <img src={ props.imgUrl ? props.imgUrl : "no image"} alt="" className="rounded-t-lg" />
      <div className="pt-8 pb-3 px-3 relative  rounded-b-lg">
        <h3 className="text-xl lg:text-2xl font-semibold">
          { props.title ? props.title : "No Title" }
        </h3>
        <h4 className=" text-lg lg:text-xl text-gray-600 dark:text-gray-300">
          { props.year ? props.year : "No date" }
        </h4>
        <div className=" inline-flex  bg-gray-600 bg-opacity-75 items-center justify-center overflow-hidden rounded-full absolute -top-6 right-4">
          <svg className="w-12 h-12 transform -rotate-90">
            <circle
              className="text-gray-300"
              strokeWidth="6"
              stroke="currentColor"
              fill="transparent"
              r="22"
              cx="24"
              cy="24"
            />
            <circle
              className="text-green-500"
              strokeWidth="6"
              strokeDasharray={circleArray}
              strokeDashoffset={circleProgress}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="22"
              cx="24"
              cy="24"
            />
          </svg>
          <span className="absolute text-sm md:text-base text-white dark:text-gray-300 font-semibold ">
            {rating+"%"}
          </span>
        </div>
      </div>
    </div>
  );
};
