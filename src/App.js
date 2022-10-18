//import { useState } from 'react';
import './App.css';

import Navbar from './component/Navbarss';
import { moviesData } from './assest/Data';
import CardList from './component/CardList';
import {Routes , Route} from "react-router-dom";
import Home  from './component/Home';
import MoreDetais from './component/MoreDetais';
import Navbarss from './component/Navbarss';







function App() {
 //const [name , setName] = useState("");
  
  return (
    <div className="App">
      <Navbarss/>
    
     <Routes>
      <Route path = "/home" element = {<Home moviesData = {moviesData}/>} />
      <Route path='/movies' element={ <CardList moviesData = {moviesData}/>}/>
      <Route path = "/mouvie/:id" element = {<MoreDetais/>}/>
     </Routes>

    </div>
  )
}

export default App;
