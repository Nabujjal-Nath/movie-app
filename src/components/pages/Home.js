import Slideshow from '../Slideshow';
import Genrelist from '../Genrelist';
import Trending from '../Trending'
import Top_rated_movies from '../Top_rated_movies';
function Home() {
    return (

        <div className="container">
            < Slideshow/>
            < Genrelist/>
            < Trending/>
            < Top_rated_movies/>
        </div>
    );
}
export default Home;