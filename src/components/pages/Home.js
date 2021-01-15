import Slideshow from '../Slideshow';
import Genrelist from '../Genrelist';
import Trending from '../Trending'
function Home() {
    return (

        <div className="container">
            < Slideshow/>
            < Genrelist/>
            <Trending/>
        </div>
    );
}
export default Home;