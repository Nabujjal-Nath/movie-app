import React, { useState, useEffect } from 'react';
import { fetchTopRatedMovies } from "../leverageAPI/Api";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Top_rated_movies(){
    const [topRated, setTopRated] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setTopRated(await fetchTopRatedMovies());
        };
        fetchAPI();
    }, []);
 

    const topRatedList=topRated.map((item,index)=>{

        return (
            <div className="i" style={{ display: 'flex' }} key={index}>
                <div className="i" style={{ backgroundColor: "#1a1a1a", display: 'flex', justifyContent: 'center', width: '220px', height: '380px', margin: '10px' }}>
                    <Link to={`/movie/${item.id}`}>
                        <img className="i" style={{ width: '200px', height: '270px', paddingTop: '20px' }} src={item.poster} alt={item.title}></img>
                        <p className="i" style={{ color: "#2c9be6", textDecoration:'none' }}>{item.title}</p>
                        <p className="i" style={{ color: "#2c9be6",textDecoration:'none' }} ><i className="fas fa-star" style={{color:'#ffcc00',paddingRight:'10px'}}></i>{item.rating}</p>
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


    return(
        <div>
        <h2> TOP RATED MOVIES </h2>
        <Slider {...settings}>
           {topRatedList}
        </Slider>
    </div>

    );

}




export default Top_rated_movies;