import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './pages/Form';
import Home from './pages/Home';
import Navbar from './components/Navbar'; 
import Data from './pages/Data';
import CourseRegistrationForm from './pages/CourseRegistrationForm';
import Course from './components/Course';


function App() {
  return (
    <Router>
      <div>
       <Navbar/>
       

        
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/form" element={<Form/>} />
          <Route path="/data" element={<Data/>} />
          <Route path="/courses" element={<CourseRegistrationForm/>} />
          <Route path="/viewcourse" element={<Course/>} />
       
          
          
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
