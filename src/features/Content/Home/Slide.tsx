import { HiPlay } from "react-icons/hi";

type SlidePropsType = {
  imgUrl: string;
};
export const Slide = (props: SlidePropsType) => {
  return (
    <div
      className="max-w-7xl relative flex flex-row justify-center lg:mx-auto lg:w-4/5"
      style={{ maxHeight: "500px" }}
    >
      <img src={props.imgUrl} alt="" className="w-full md:object-cover" />
      <div className="absolute w-3/4 md:w-1/2 font-semibold md:text-lg p-4 shadow-lg  rounded-md bg-gray-800 bg-opacity-50 ring-2 ring-pink-600 ring-opacity-50 top-1/2 lg:top-2/3 -mt-8 md:mt-0 left-8 md:left-1/4  text-white dark:text-gray-300">
        <h2 className="text-lg md:text-2xl truncate ">
          Spider-Man: No Way Home
        </h2>
        <h4>Year: 2021</h4>
        <h4>Rating: 84%</h4>
        <button className="bg-pink-600 dark:text-gray-800 text-white rounded-full leading-none text-3xl md:text-4xl lg:text-5xl bottom-4 absolute right-4 flex flex-row justify-center items-center">
          <HiPlay />
        </button>
      </div>
    </div>
  );
};
