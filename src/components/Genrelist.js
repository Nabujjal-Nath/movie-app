import React,{useState,useEffect} from 'react';
import {fetchGenreList} from '../leverageAPI/Api'
function Genrelist(){
    const [genreList, setGenreList] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setGenreList(await fetchGenreList());
        };
        fetchAPI();
    }, []);
  console.log("gggg",genreList);
 const genres= genreList.map((item,index)=>{
     return(
         <li className="list-inline-item" key={index}>
           <button type="button" className="btn btn-outline-info">
           {item.name}
           </button>
         </li>
     );
 })

 return(
     <div className="row mt-3">
       <div className="col">
        <ul className="list-inline">
          {genres}
        </ul>
       </div>
     </div>
 );


}



export default Genrelist;
