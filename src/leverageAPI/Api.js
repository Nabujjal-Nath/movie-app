import axios from 'axios';
const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = 'https://api.themoviedb.org/3';
const nowPlaying = `${baseUrl}/movie/now_playing`;
const genreList = `${baseUrl}/genre/movie/list`;
const discoverMovie = `${baseUrl}/discover/movie`;
const trendingPerson = `${baseUrl}/trending/person/week`;
const topRatedMovies = `${baseUrl}/movie/top_rated`;
const movies = `${baseUrl}/movie`;
const search=`${baseUrl}/search/movie`;

export const fetchNowPlaying = async () => {
    const { data } = await axios.get(nowPlaying, {
        params: {
            api_key: apiKey
        }
    })
    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
        id: m['id'],
        backPoster: posterUrl + m['backdrop_path'],
        popularity: m['popularith'],
        title: m['title'],
        poster: posterUrl + m['poster_path'],
        overview: m['overview'],
        rating: m['vote_average']

    }))
    return modifiedData;
}

export const fetchGenreList = async () => {
    const { data } = await axios.get(genreList, {
        params: {
            api_key: apiKey
        }
    })
    const modifiedData = data['genres'].map((m) => ({
        id: m['id'],
        name: m['name']
    }))
    return modifiedData;

}

export const fetchDiscoverMovie = async (genre_id) => {
    const { data } = await axios.get(discoverMovie, {
        params: {
            api_key: apiKey,
            page: 1,
            with_genres: genre_id,

        }
    })
    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
        id: m['id'],
        backPoster: posterUrl + m['backdrop_path'],
        popularity: m['popularith'],
        title: m['title'],
        poster: posterUrl + m['poster_path'],
        overview: m['overview'],
        rating: m['vote_average']

    }))
    return modifiedData;

}

export const fetchTrendingPerson = async () => {
    const { data } = await axios.get(trendingPerson, {
        params: {
            api_key: apiKey
        }
    })
    const modifiedData = data['results'].map((m) => ({
        id: m['id'],
        popularity: m['popularity'],
        name: m['name'],
        profileImg: 'https://image.tmdb.org/t/p/w200' + m['profile_path'],
        known: m['known_for_department']
    }))
    return modifiedData;

}

export const fetchTopRatedMovies = async () => {
    const { data } = await axios.get(topRatedMovies, {
        params: {
            api_key: apiKey,

        }

    })
    const posterUrl = 'https://image.tmdb.org/t/p/original/';
    const modifiedData = data['results'].map((m) => ({
        id: m['id'],
        backPoster: posterUrl + m['backdrop_path'],
        popularity: m['popularith'],
        title: m['title'],
        poster: posterUrl + m['poster_path'],
        overview: m['overview'],
        rating: m['vote_average']

    }))
    return modifiedData;
}



export const fetchMovies = async (movie_id) => {
    const { data } = await axios.get(`${movies}/${movie_id}`, {
        params: {
            api_key: apiKey,

        }
    })
    const posterUrl = 'https://image.tmdb.org/t/p/original/';

    const modifiedData = {
        id: data.id,
        original_title: data.original_title,
        overview: data.overview,
        genres: data.genres,
        backPoster: posterUrl + data.backdrop_path,
        poster: posterUrl + data.poster_path,
        revenue: data.revenue,
        runtime: data.runtime,
        release_date: data.release_date,
        budget: data.budget,
        title: data.title,

    }
    // console.log('modified..adata:',modifiedData);
    return modifiedData;
}


export const fetchVideos = async (movie_id) => {
    try {
        const { data } = await axios.get(`${movies}/${movie_id}/videos`, {
            params: {
                api_key: apiKey,
            }
        })
        if (data.results[1])
            return data.results[1];
        else
            return data.results[0];

    } catch (e) { }
}

export const fetchCast = async (movie_id) => {
    try {
        const { data } = await axios.get(`${movies}/${movie_id}/credits`, {
            params: {
                api_key: apiKey,
            }
        })
      
        const modifiedData = data['cast'].map((m) => ({
            id: m['id'],
            character: m['character'],
            name: m['name'],
            profileImg: 'https://image.tmdb.org/t/p/w200' + m['profile_path'],
            code:0
        }))
        return modifiedData;
        

    } catch (e) { }
}
export const fetchSimilar = async (movie_id) => {
    try {
        const { data } = await axios.get(`${movies}/${movie_id}/similar`, {
            params: {
                api_key: apiKey,
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average']

        }))
        return modifiedData;

    } catch (e) { }
}

export const FetchSearch = async (query) => {
    try {
        const { data } = await axios.get(`${search}`, {
            params: {
                api_key: apiKey,
                query:query
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularity'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average']

        }))
        return modifiedData;

    } catch (e) { }
}

