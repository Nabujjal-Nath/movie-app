import React, { useState, useEffect } from 'react';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { fetchNowPlaying } from "../leverageAPI/Api";
import { Carousel } from "react-bootstrap";

function Slideshow(){
    const [nowPlaying, setNowPlaying] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setNowPlaying(await fetchNowPlaying());
        };
        fetchAPI();
    }, []);
    
   
     const slideShow=nowPlaying.slice(0, 5).map((item, index) => {
        return (
                 
            
                <Carousel.Item   key={index} style={{ height: 500, width: "100%" }} >
                    <img
                        className="d-block w-100 col-xs-12"
                        src={item.backPoster}
                        alt={item.title}
                        style={{ height: 600 }}

                    />
                     
                    <Carousel.Caption>
                        <h3>{item.title}</h3>
                      
                    </Carousel.Caption>
                </Carousel.Item>
            

        );
    });

  

    return(
        <div>
        <h2>Movies Playing Now in Theatre</h2>
        <Carousel >
           {slideShow}
        </Carousel>
    </div>
    )
}

export default Slideshow;