


let baseUrl = "https://image.tmdb.org/t/p/";
let size = "w500";

export const TrendingTVShowsSection = () => {

    const imgUrl = `${baseUrl}${size}/gNbdjDi1HamTCrfvM9JeA94bNi2.jpg`
    return (<>
        
        <h2 className="text-xl md:text-2xl mb-1 md:mb-3">Trending TV Shows</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            
            {
                [1,2,3,4,5,6].map(i=> (<div key={i} className="bg-pink-600 text-white">
                    tv show {i}
                    <img src={imgUrl} alt="" />
                </div>))
            }
        </div>
    </>)
}