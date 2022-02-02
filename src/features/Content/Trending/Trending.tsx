import { useAppSelector } from "../../../app/hooks";
import { HomeGridItem } from "../../../components/HomeGridItem";

export const Trending = () => {
  const imgUrl = `https://www.themoviedb.org/t/p/original/1QqaRZ8neYlqLx7ODZC4as47wUV.jpg`;
  const isMobile = useAppSelector((state) => state.mobileDetect.isMobile);

  return (
    <div className="container  p-2 md:p-4">
      <h2 className="font-semibold dark:text-white text-xl md:text-2xl  mb-3 md:mb-6">
        Trending Movies and Shows
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
        {!isMobile
          ? [1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <HomeGridItem key={i} imgUrl={imgUrl} />
            ))
          : [1, 2, 3, 4].map((i) => <HomeGridItem key={i} imgUrl={imgUrl} />)}
      </div>
    </div>
  );
};
