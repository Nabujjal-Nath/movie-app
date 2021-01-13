import axios from 'axios';
const apiKey=process.env.REACT_APP_API_KEY;
const baseUrl='https://api.themoviedb.org/3';
const nowPlaying=`${baseUrl}/movie/now_playing`;
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

