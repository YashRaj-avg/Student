import React, { useState, useEffect } from 'react';

const Course = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://172.25.0.105:8181/api/course/fetchAllCourses');
      if (!response.ok) {
        throw new Error('Failed to fetch courses');
      }
      const data = await response.json();
      setCourses(data); 
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  return (
    <div>
      <h1>Available Courses</h1>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Description</th>
            <th>Fee</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.courseId}>
              <td>{course.courseName}</td>
              <td>{course.courseDescription}</td>
              <td>${course.fee}</td>
              <td>
                <img
                  src={`http://172.25.0.105:8181/api/course/${course.courseImage}`}
                  alt={course.courseName}
                  style={{ maxWidth: '100px' }} 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Course;

