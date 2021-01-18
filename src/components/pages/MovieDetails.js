import React,{useEffect,useState} from 'react';
import {fetchMovies} from '../../leverageAPI/Api';
function MovieDetails({movie}){
let results= movie.params;
const [movieInfo, setMovieInfo] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setMovieInfo(await fetchMovies(results.id));
        };
        fetchAPI();
    }, [results.id]);
    
    return (
    <h1>MovieDetails from details</h1>
    );
}
export default MovieDetails;