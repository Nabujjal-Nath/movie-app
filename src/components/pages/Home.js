import Slideshow from '../Slideshow';
import Genrelist from '../Genrelist';
import Trending from '../Trending'
import Top_rated_movies from '../Top_rated_movies';
import Footer from '../Footer';
import Navbar from '../Navbar';
function Home() {
    return (

        <div className="container">
            < Navbar/>
            < Slideshow/>
            < Genrelist/>
            < Trending/>
            < Top_rated_movies/>
            < Footer/>
        </div>
    );
}
export default Home;