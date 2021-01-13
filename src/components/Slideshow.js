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
    
   
     const jkl=nowPlaying.slice(0, 5).map((item, index) => {
        return (
                 
            
                <Carousel.Item key={index} style={{ height: 500, width: "100%" }} >
                    <img
                        className="d-block w-100"
                        src={item.backPoster}
                        alt={item.title}
                        style={{ height: 600 }}

                    />
                     
                    <Carousel.Caption>
                       <h1><i className="far fa-play-circle"
                       style={{fontSize:100, color:'yellow', marginBottom:"100px"}}
                      >
                      </i> </h1>
                        <h3>{item.title}</h3>
                      
                    </Carousel.Caption>
                </Carousel.Item>
            

        );
    });

    return(
        <Carousel>
           {jkl}
        </Carousel>
    )
}

export default Slideshow;