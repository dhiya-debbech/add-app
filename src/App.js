import { useState } from 'react';
import './App.css';

import Navbar from './component/Navbarss';
import { moviesData } from './assest/Data';
import CardList from './component/CardList';






function App() {
 const [name , setName] = useState("");
  
  return (
    <div className="App">
      <Navbar/>
      
     <CardList moviesData = {moviesData}/>
    </div>
  )
}

export default App;
