
const apikey = "19c4cc7648e7d18f456ac92ce6200a0c"

const baseUrl = "https://api.themoviedb.org/3"

const sliderImgBaseUrl = "https://image.tmdb.org/t/p/w1280"
const posterImgBaseUrl = "https://image.tmdb.org/t/p/w500"

// home page
const trendingMovies = `/trending/movie/week?api_key=${apikey}`
const trendingTVs = `/trending/tv/week?api_key=${apikey}`
const trendingPeople = `/trending/person/week?api_key=${apikey}`

// movies page
const popularMovies = `/movie/popular?api_key=${apikey}`
const moviesFilter = `/discover/movie?api_key=${apikey}&sort_by=popularity.desc&release_date.gte=${"RELEASE DATE START"}&release_date.lte=${"RELEASE DATE END"}&with_genres=${"GENRES"}&with_keywords=${"KEYWORD"}&page=3`

// tv shows page
const popularTV = `/tv/popular?api_key=${apikey}`
const tvFilter = `/discover/tv?api_key=${apikey}&sort_by=popularity.desc&air_date.gte=${"RELEASE DATE START"}&air_date.lte=${"RELEASE DATE END"}&with_genres=${"GENRES"}&with_keywords=${"KEYWORD"}&page=3`

// people page
const popularPeople = `/person/popular?api_key=${apikey}&page=3`


// search page
const searchQuery = `/search/multi?api_key=${apikey}&query=${"QUERY"}`




export {baseUrl, apikey, sliderImgBaseUrl, posterImgBaseUrl}