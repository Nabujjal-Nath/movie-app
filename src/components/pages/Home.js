import Slideshow from '../Slideshow';
import Genrelist from '../Genrelist';
import Trending from '../Trending'
import TopRatedMovies from '../TopRatedMovies';
import Footer from '../Footer';
import Navbar from '../Navbar';
function Home() {
    return (

        <div className="container">
            < Navbar/>
            < Slideshow/>
            < Genrelist/>
            < Trending/>
            < TopRatedMovies/>
            < Footer/>
        </div>
    );
}
export default Home;