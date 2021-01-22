import React, { useState, useEffect } from 'react';
import { fetchTrendingPerson } from "../leverageAPI/Api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Trending() {
    const [trendingPerson, setTrendingPerson] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setTrendingPerson(await fetchTrendingPerson());
        };
        fetchAPI();
    }, []);

    
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


    const trendPerson = trendingPerson.map((item, index) => {
        return (
            <div  style={{ display: 'flex' }} key={index}>
            <div className="col col-xs-12 ml-4" style={{ backgroundColor: "#1a1a1a", display: 'flex', justifyContent: 'center', width: '220px', height: '380px', margin: '10px' }}>
                    <div>
                    <img  style={{ width: '200px', height: '270px', paddingTop: '20px' }} src={item.profileImg} alt={item.name}></img>
                    <p  style={{ color: "#2c9be6", textDecoration:'none' }}>{item.name}</p>
                    <p  style={{ color: "#2c9be6",textDecoration:'none' }}> Trending for {item.known}</p>
                    </div>
            </div>
        </div>



    
        )
    })

    return (
        <div>
        <h2> Trending </h2>
        <div className="container">
        <Slider {...settings}>
           {trendPerson}
        </Slider>
        </div>
    </div>
    )

}

export default Trending;