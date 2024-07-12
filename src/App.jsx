import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './pages/Form';
import Home from './pages/Home';
import Navbar from './components/Navbar'; 
import Data from './pages/Data';



function App() {
  return (
    <Router>
      <div>
       <Navbar/>
       

        
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/form" element={<Form/>} />
          <Route path="/data" element={<Data/>} />
          
          
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
