import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-cover bg-center relative">
      <img className="w-full" src="./ss.jpg" alt="image" />
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="absolute top-[10%] text-3xl lg:text-5xl font-bold text-white mb-4">Welcome Students!</h1>
          <div className="absolute top-[20%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 shadow-md rounded-lg">
              <h2 className="text-lg font-semibold mb-2">Courses</h2>
              <p className="text-gray-700">View and enroll in available courses.</p>
              <Link to="/viewcourse">
                <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                  View Courses
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
