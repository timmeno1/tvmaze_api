
import { useGetOneMovieMutation } from "../app/services/movies/moviesPageApi"


export const MovieTVDetailPage =  () => {

    const [getOneMovie, {isLoading, data}] = useGetOneMovieMutation()



    return ( <div>detail page <button className="m-10 bg-slate-600 text-white" onClick={()=>{
        getOneMovie("774825")
        if(data) console.log(data)
    }}>getData</button></div> )
}