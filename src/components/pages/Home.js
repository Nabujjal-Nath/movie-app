import Slideshow from '../Slideshow';
import Genrelist from '../Genrelist';
import Trending from '../Trending'
import Top_rated_movies from '../Top_rated_movies';
import Footer from '../Footer';

function Home() {
    return (

        <div className="container">
            < Slideshow/>
            < Genrelist/>
            < Trending/>
            < Top_rated_movies/>
            < Footer/>
        </div>
    );
}
export default Home;