import './App.css';
import React from 'react';
import { Route,Switch} from "react-router-dom";
import Home from "./components/pages/Home";
import MovieDetails from './components/pages/MovieDetails';

function App() {
  return (
    <main>
     <Switch>
       <Route path='/' exact component={Home}/>
       <Route path='/movie/:id' exact component={MovieDetails}/>
     </Switch>
       
    </main>
  );
} 

export default App;
