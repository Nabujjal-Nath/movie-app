import axios from 'axios';
const apiKey=process.env.REACT_APP_API_KEY;
const baseUrl='https://api.themoviedb.org/3';
const nowPlaying=`${baseUrl}/movie/now_playing`;
const genreList=`${baseUrl}/genre/movie/list`;
const discoverMovie=`${baseUrl}/discover/movie`;
const trendingPerson=`${baseUrl}/trending/person/week`;

export const fetchNowPlaying=async()=>{
 const {data}= await axios.get(nowPlaying,{
     params:{
          api_key:apiKey
     }
 })
 const posterUrl='https://image.tmdb.org/t/p/original/';
 const modifiedData=data['results'].map((m)=>({
     id : m['id'],
     backPoster : posterUrl + m['backdrop_path'],
     popularity : m['popularith'],
     title:m['title'],
     poster:posterUrl+m['poster_path'],
     overview:m['overview'],
     rating:m['vote_average']

 }))
 return modifiedData;
}

export const fetchGenreList=async()=>{
    const {data}=await axios.get(genreList,{
        params:{
            api_key:apiKey
        }
    })
 const modifiedData=data['genres'].map((m)=>({
     id:m['id'],
     name:m['name']
 }))
 return modifiedData; 

}

export const fetchDiscoverMovie=async(genre_id)=>{
    const {data}=await axios.get(discoverMovie,{
        params:{
            api_key:apiKey,
            page:1,
            with_genres:genre_id
        }
    })
    const posterUrl='https://image.tmdb.org/t/p/original/';
    const modifiedData=data['results'].map((m)=>({
        id : m['id'],
        backPoster : posterUrl + m['backdrop_path'],
        popularity : m['popularith'],
        title:m['title'],
        poster:posterUrl+m['poster_path'],
        overview:m['overview'],
        rating:m['vote_average']
   
    }))
    return modifiedData;

}

export const fetchTrendingPerson=async()=>{
    const {data}=await axios.get(trendingPerson,{
        params:{
            api_key:apiKey
        }
    })
 const modifiedData=data['results'].map((m)=>({
     id:m['id'],
     popularity:m['popularity'],
     name:m['name'],
     profileImg:'https://image.tmdb.org/t/p/w200'+m['profile_path'],
     known:m['known_for_department']
 }))
 return modifiedData; 

}  



