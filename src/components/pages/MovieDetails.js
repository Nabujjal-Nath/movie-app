import React, { useEffect, useState } from 'react';
import { fetchMovies, fetchVideos, fetchCast, fetchSimilar } from '../../leverageAPI/Api';
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../Footer';
import Navbar from '../Navbar';

function MovieDetails({ match }) {
    console.log('params..', match);
    let genre = [];
    let results = match.params;
    let castList;
    const [movieInfo, setMovieInfo] = useState([]);
    const [isOpen, setOpen] = useState(false);
    const [video, setVideo] = useState([]);
    const [cast, setCast] = useState([]);
    const [similar, setSimilar] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setMovieInfo(await fetchMovies(results.id));
            setVideo(await fetchVideos(results.id));
            setCast(await fetchCast(results.id));
            setSimilar(await fetchSimilar(results.id));
            window.scrollTo(0, 0);
        };
        fetchAPI();
    }, [results.id]);
    console.log('movieInfo...:', movieInfo)
    genre = movieInfo.genres;
    let genreList;
    if (genre) {
        genreList = genre.map((item, index) => {
            return (
                <li className="list-inline-item" key={index}>
                    {item.name}
                </li>
            )
        })
    }

    <div className="col-md-3">
        <h4>Genre</h4>
        <ul className="inline-list" style={{ color: "#2c9be6" }} >
            {genreList}
        </ul>
    </div>


    if (cast.length > 4) {
        castList = cast.map((item, index) => {
            return (
                <div style={{ display: 'flex' }} key={index}>
                    <div className="col" style={{ backgroundColor: "#1a1a1a", display: 'flex', justifyContent: 'center', width: '220px', height: '380px', margin: '10px' }}>
                        <div >
                            <img style={{ width: '200px', height: '270px', paddingTop: '20px' }} src={item.profileImg} alt={item.id}></img>
                            <p style={{ color: "#2c9be6", textDecoration: 'none' }}>{item.name}</p>
                            <p style={{ color: "#2c9be6", textDecoration: 'none' }} >{item.character}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    const similarMovies = similar.map((item, index) => {
        return (
            <div style={{ display: 'flex' }} key={index}>
                <div className="col" style={{ backgroundColor: "#1a1a1a", display: 'flex', justifyContent: 'center', width: '220px', height: '380px', margin: '10px' }}>
                    <Link to={`/movie/${item.id}`}>
                        <img style={{ width: '200px', height: '270px', paddingTop: '20px' }} src={item.poster} alt={item.title}></img>
                        <p style={{ color: "#2c9be6", textDecoration: 'none' }}>{item.title}</p>
                        <p style={{ color: "#2c9be6", textDecoration: 'none' }} ><i className="fas fa-star" style={{ color: '#ffcc00', paddingRight: '10px' }}></i>{item.rating}</p>
                    </Link>
                </div>
            </div>
        )
    })
    console.log('similar...', similarMovies);

    const MoviePalyerModal = (props) => {
        const youtubeUrl = "https://www.youtube.com/watch?v=";
        if (typeof video !== 'undefined') {
            return (
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered

                >

                    <Modal.Body style={{ backgroundColor: "#000000" }}>
                        <ReactPlayer
                            className="react-player"
                            controls
                            url={youtubeUrl + video.key}
                            playing
                            width="100%"
                        ></ReactPlayer>
                    </Modal.Body>
                </Modal>
            );
        }
    }


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };



    return (
        <div>

            <div className="container">
                < Navbar />
                <div className="row mt-2">
                    {
                        (video) ? (
                            <MoviePalyerModal
                                show={isOpen}
                                onHide={() => {
                                    setOpen(false);
                                }}

                            ></MoviePalyerModal>) : (<br />)
                    }


                    <div className="col text-center" style={{ width: "100%" }}>
                        <img
                            className="img-fluid" style={{ width: '100%', height: '500px' }}
                            src={movieInfo.backPoster}
                            alt={movieInfo.title}
                        />
                        <div className="carousel-center"><i
                            onClick={() => setOpen(true)}
                            className="far fa-play-circle"
                            style={{ fontSize: 100, color: 'yellow', marginBottom: "10px" }}
                        >
                        </i>
                        </div>
                        <div className="carousel-caption">
                            <h3>
                                {movieInfo.title}
                            </h3>
                        </div>

                    </div>
                </div>
                <div className="row mt-3" >
                    <div className="col-md-3">
                        <h4>Genre</h4>
                        <ul className="inline-list" style={{ color: "#2c9be6" }} >
                            {genreList}
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4>Runtime</h4>
                        <p style={{ color: "#2c9be6" }} >{movieInfo.runtime + " mins"}</p>
                    </div>
                    <div className="col-md-3">
                        <h4>Release Date</h4>
                        <p style={{ color: "#2c9be6" }} >{movieInfo.release_date}</p>
                    </div>
                    <div className="col-md-3">
                        <h4>Revenue</h4>
                        <p style={{ color: "#2c9be6" }} >{movieInfo.revenue}</p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <h4>Overview</h4>
                        <p>{movieInfo.overview}</p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <h4>Cast</h4>

                    </div>
                </div>
                <div>
                    {
                        (cast.length > 4) ? (
                            <Slider {...settings}>
                                {castList}
                            </Slider>)
                            : (<h5 className="row mt-2 ml-3">Sorry, cast not available yet !</h5>)
                    }
                </div>

                <div>
                    {
                        (similar.length > 4) ? (
                            <div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <h4>More Like This</h4>
                                    </div>
                                </div>
                                <Slider {...settings}>
                                    {similarMovies}
                                </Slider>
                            </div>)
                            : (<br />)
                    }
                </div>


                < Footer />


            </div>




        </div>

    );
}
export default MovieDetails;








