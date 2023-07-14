import Navbar from "./components/Navbar"
import Home from "./components/Home";
import About from "./components/About";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>  
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
