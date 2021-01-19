import React, { useEffect, useState } from 'react';
import { fetchMovies, fetchVideos } from '../../leverageAPI/Api';
import { Modal } from "react-bootstrap";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import ReactPlayer from "react-player";

function MovieDetails({ match }) {
    console.log('params..', match);
    let results = match.params;
    const [movieInfo, setMovieInfo] = useState([]);
    const [isOpen, setOpen] = useState(false);
    const [video, setVideo] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setMovieInfo(await fetchMovies(results.id));
            setVideo(await fetchVideos(results.id));
        };
        fetchAPI();
    }, [results.id]);
    console.log('movieInfo...:', movieInfo)


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


    return (
        <div className="container">
            <div className="row mt-2">
                {
                 (video)?(
                    <MoviePalyerModal
                        show={isOpen}
                        onHide={() => {
                            setOpen(false);
                        }}

                    ></MoviePalyerModal>):(<br/>)
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
        </div>
    );
}
export default MovieDetails;