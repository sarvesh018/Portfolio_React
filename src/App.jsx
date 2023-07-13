import Navbar from "./components/Navbar"
import Home from "./components/Home";

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes> 
          {/* <Route exact path='/' element={<Navbar/>}/> */}
          <Route exact path='/' element={<Home/>}/>
        </Routes>
      </Router>
      
      {/* <Home/> */}
    </div>
  );
}

export default App;
