import crew from '../../../assets/img/crew_photo.jpg'

export const HomePageDivider = () => {

  return (
    <div className="w-full h-32 md:h-64  preserve-3d">
      <div className="parallaxImage  ">
        <img src={crew} alt="" className="object-cover"/>
      </div>
      <div className="parallaxHero absolute text-3xl text-white flex flex-row justify-center items-center">
        <div className="uppercase">Popular people</div>
      </div>
    </div>
  );
};
