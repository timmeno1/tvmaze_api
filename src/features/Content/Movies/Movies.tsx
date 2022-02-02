import { useAppSelector } from "../../../app/hooks";
import { HomeGridItem } from "../../../components/HomeGridItem";
import { SideBoard } from "../../../components/SideBoard";


let baseUrl = "https://image.tmdb.org/t/p/";
let size = "w500";

export const Moveis = () => {

  const imgUrl = `${baseUrl}${size}/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg`;

  const isMobile = useAppSelector((state) => state.mobileDetect.isMobile);

    return (
        <div className="container px-2 py-4 md:p-4">

        <h2 className="font-semibold dark:text-white text-xl md:text-2xl  mb-3 md:mb-6">
          Popuar Movies
        </h2>
            
      <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4 lg:gap-x-8">
          <div>
              <SideBoard />
          </div>
          <div>
              
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
        {!isMobile
          ? [1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <HomeGridItem key={i} imgUrl={imgUrl} />
            ))
          : [1, 2, 3, 4].map((i) => <HomeGridItem key={i} imgUrl={imgUrl} />)}
      </div>
          </div>
      </div>
        </div>
    )
}