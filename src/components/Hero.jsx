import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [courses, setCourses] = useState([]);
  const [showCourses, setShowCourses] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://172.16.100.112:8181/api/course/fetchAllCourses');
      if (!response.ok) {
        throw new Error('Failed to fetch courses');
      }
      const data = await response.json();
      setCourses(data.body);
      setShowCourses(true);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const openModal = (course) => {
    setSelectedCourse(course);
  };

  const closeModal = () => {
    setSelectedCourse(null);
  };

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
              <button onClick={fetchCourses} className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                View Courses
              </button>
              {showCourses && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Available Courses:</h3>
                  <ul>
                    {courses.map(course => (
                      <li key={course.courseId}>
                        <button className="text-blue-500 hover:underline" onClick={() => openModal(course)}>
                          {course.courseName}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {selectedCourse && (
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-white flex justify-center items-center">
                <div className="bg-slate-400 p-4 rounded-md shadow-md">
                  <h2 className="text-lg font-semibold mb-2">{selectedCourse.courseName}</h2>
                  <p className="text-gray-700">{selectedCourse.courseDescription}</p>
                  {selectedCourse.courseImage && (
                    <img src={`'http://172.16.100.112:8181/api/Course${selectedCourse.courseImage}`} alt={selectedCourse.courseName} className="my-4 rounded-md shadow-md" style={{ maxWidth: '100%' }} />
                  )}
                  <button onClick={closeModal} className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
