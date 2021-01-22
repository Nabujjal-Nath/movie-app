import Navbar from '../Navbar';
import {React,useEffect,useState} from 'react'
import {Link } from 'react-router-dom';
import {FetchSearch} from '../../leverageAPI/Api'; 
function SearchResults({match}) {
    const [search,setSearch] = useState([]);
    let results = match.params;
    useEffect(() => {
        const fetchAPI = async () => {
            setSearch(await FetchSearch(results.query));
        };
        fetchAPI();
    }, [results.query]);

   const movieList=search.map((item,index)=>{
    return (
        <div  style={{ display: 'flex' }} key={index}>
        <div className="col col-xs-12" style={{ backgroundColor: "#1a1a1a", display: 'flex', justifyContent: 'center', width: '220px', height: '380px', margin: '10px' }}>
            <Link to={`/movie/${item.id}`}>
                <img  style={{ width: '200px', height: '270px', paddingTop: '20px' }} src={item.poster} alt={item.title}></img>
                <p  style={{ color: "#2c9be6", textDecoration:'none' }}>{item.title}</p>
                <p  style={{ color: "#2c9be6",textDecoration:'none' }} ><i className="fas fa-star" style={{color:'#ffcc00',paddingRight:'10px'}}></i>{item.rating}</p>
            </Link> 
        </div>
    </div>
    )
   })

    console.log('params..search...', search);
    return (
        <div>
       

        <div className="container">   
       
           < Navbar/>   
           
            <div className="row mt-3" style={{margin:"40px"}}>

            {movieList}
            </div>
        </div>
        </div>
    );
}
export default SearchResults;