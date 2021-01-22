import React, { useState, useEffect } from 'react';
import { fetchGenreList, fetchDiscoverMovie } from '../leverageAPI/Api'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Genrelist() {
    const [genreList, setGenreList] = useState([]);
    const [discoverMovie, setDiscoverMovie] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setGenreList(await fetchGenreList());
            setDiscoverMovie(await fetchDiscoverMovie());
        };
        fetchAPI();
    }, []);
    const handleGenreEvent = async (genre_id) => {
        setDiscoverMovie(await fetchDiscoverMovie(genre_id));

    }

    const genres = genreList.map((item, index) => {
        return (
            <li className="list-inline-item" key={index}>
                <button type="button" className="btn btn-outline-info" onClick={(e) => {
                    e.preventDefault();
                    handleGenreEvent(item.id);
                }}>
                    {item.name}
                </button>
            </li>
        );
    })

    const discover = discoverMovie.slice(0, 64).map((item, index) => {
        return (
            <div  style={{ display: 'flex' }} key={index}>
                <div className="col col-xs-12 ml-5" style={{ backgroundColor: "#1a1a1a", display: 'flex', justifyContent: 'center', width: '220px', height: '380px', margin: '10px' }}>
                    <Link to={`/movie/${item.id}`}>
                        <img  style={{ width: '200px', height: '270px', paddingTop: '20px' }} src={item.poster} alt={item.title}></img>
                        <p  style={{ color: "#2c9be6", textDecoration:'none' }}>{item.title}</p>
                        <p  style={{ color: "#2c9be6",textDecoration:'none' }} ><i className="fas fa-star" style={{color:'#ffcc00',paddingRight:'10px'}}></i>{item.rating}</p>
                    </Link> 
                </div>
            </div>
        )
    })


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
              arrows:false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false
            }
          }
        ]
      };


    return (
        <div>
            <h3>Genres</h3>
            <div className="row mt-3">
                <div className="col">
                    <ul className="list-inline">
                        {genres}
                    </ul>
                </div>
            </div>
            <h3> Watch Trailer </h3>
            <Slider {...settings}>
               {discover}
            </Slider>
        </div>
    );

}
export default Genrelist;
