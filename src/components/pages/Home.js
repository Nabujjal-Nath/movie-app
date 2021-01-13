// import React, { useState, useEffect } from 'react';
// import '../../App.css'
// import ReactDOM from "react-dom";
// import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
// import { fetchNowPlaying } from "../../leverageAPI/Api";
// import RBCarousel from "react-bootstrap-carousel";
// import { Carousel } from "react-bootstrap";
import Slideshow from '../Slideshow';

function Home() {
    // const [nowPlaying, setNowPlaying] = useState([]);

    // useEffect(() => {
    //     const fetchAPI = async () => {
    //         setNowPlaying(await fetchNowPlaying());
    //     };
    //     fetchAPI();
    // }, []);

    // const movies = nowPlaying.slice(0, 5).map((item, index) => {
    //     return (
    //         <div style={{ height: 500, width: "100%" }} key={index}>
    //             <div className="corousel-center">
    //                 <img style={{ height: 600 }} src={item.backPoster} alt={item.title} />
    //             </div>
    //             <div className="carousel-captain"
    //                 style={{ textAlign: "center", fontSize: 35 }}>
    //                 {item.title}
    //             </div>
    //         </div>
    //     );
    // });

    // const mov = nowPlaying.slice(0, 5).map((item, index) => {
    //     return (

    //         <Carousel key={index}>
    //             <Carousel.Item>
    //                 <img
    //                     className="d-block w-100"
    //                     src={item.backPoster}
    //                     alt="First slide"
    //                 />
    //                 <Carousel.Caption>
    //                     <h3>First slide label</h3>
    //                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //                 </Carousel.Caption>
    //             </Carousel.Item>
    //         </Carousel>

    //     );
    // });



    // const moviz = nowPlaying.slice(0, 5).map((item, index) => {
        
    //     return (
    //         <Carousel key={index} autoplay={true} >
    //             <Carousel.Item>
    //                 <img
    //                     className="d-block w-100"
    //                     src="https://wallpapercave.com/wp/wp4056410.jpg"
    //                     alt="First slide"
    //                 />
    //                 <Carousel.Caption>
    //                     <h3>First slide label</h3>
    //                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //                 </Carousel.Caption>
    //             </Carousel.Item>
    //             <Carousel.Item>
    //                 <img
    //                     className="d-block w-100"
    //                     src="https://wallpapercave.com/wp/wp4056410.jpg"
    //                     alt="First slide"
    //                 />
    //                 <Carousel.Caption>
    //                     <h3>First slide label</h3>
    //                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //                 </Carousel.Caption>
    //             </Carousel.Item>
    //         </Carousel>

    //     );
    // });

    // const abc = 7;





    return (

        <div className="container">
            < Slideshow/>
        </div>
    );
}
export default Home;