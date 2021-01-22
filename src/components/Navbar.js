import {React,useState} from 'react'
import {Link } from 'react-router-dom';

 function Navbar(){
    const [query,setQuery]= useState("");

    const handleSearchInputChanges = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
        console.log('onhandle..',query);
      }

     return(
    <div>
    <nav className="navbar navbar-inverse">
      <div className="container-fluid" style={{backgroundColor:'#1a1a1a',padding:'10px',borderRadius:"5px"}}>
      <div className="navbar-header">
        <Link to='/' className="navbar-brand" style={{textDecoration:"none",color:"#2c9be6",fontSize:"30px",paddingBottom:"10px"}} >
          MVDB  <i className="fas fa-film"></i>
        </Link>
       </div>
      
         <form className="navbar-form navbar-left" style={{display:'flex'}}> 
           <div className="form-group" style={{width:"350px"}} >
           <input type="text" className="form-control"
           onChange={handleSearchInputChanges}
            />
           </div>
           <Link to={`/movieSearch/${query}`}>
           <input className="btn btn-primary" type="submit" value="SEARCH" style={{height:"40px",marginLeft:"10px"}} 
           />
           </Link>
         </form>
         
      </div>
      </nav>
     
    </div>
     )
 }
 export default Navbar;