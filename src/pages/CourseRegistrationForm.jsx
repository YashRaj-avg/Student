import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

const CourseRegistrationForm = () => {
  const [courseId, setCourseId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseFee, setCourseFee] = useState('');
  const [courseImage, setCourseImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('courseId', courseId);
    formData.append('courseName', courseName);
    formData.append('courseDescription', courseDescription);
    formData.append('courseFee', courseFee);
    formData.append('courseImage', courseImage);

    try {
      const response = await fetch('http://172.16.100.112:8181/api/course/addCourse', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to add course');
      }
      // Assuming successful addition, you may want to handle the response (e.g., show a success message)
      console.log('Course added successfully!');
      // Reset form fields
      setCourseId('');
      setCourseName('');
      setCourseDescription('');
      setCourseFee('');
      setCourseImage(null);
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setCourseImage(file);
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4} p={3} boxShadow={3}>
        <Typography variant="h4">Course Registration Form</Typography>
        <form onSubmit={handleSubmit}>
          <Box mt={3}>
            <TextField
              id="courseId"
              label="Course ID"
              variant="outlined"
              fullWidth
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
              required
            />
          </Box>
          <Box mt={3}>
            <TextField
              id="courseName"
              label="Course Name"
              variant="outlined"
              fullWidth
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              required
            />
          </Box>
          <Box mt={3}>
            <TextField
              id="courseDescription"
              label="Course Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={courseDescription}
              onChange={(e) => setCourseDescription(e.target.value)}
              required
            />
          </Box>
          <Box mt={3}>
            <TextField
              id="courseFee"
              label="Course Fee"
              variant="outlined"
              fullWidth
              type="number"
              value={courseFee}
              onChange={(e) => setCourseFee(e.target.value)}
              required
            />
          </Box>
          <Box mt={3}>
            <input
              type="file"
              id="courseImage"
              onChange={handleImageChange}
              accept="image/*"
              style={{ display: 'none' }}
            />
            <label htmlFor="courseImage">
              <Button variant="outlined" component="span">
                Upload Course Image
              </Button>
            </label>
            {courseImage && <Typography>{courseImage.name}</Typography>}
          </Box>
          <Box mt={3} textAlign="right">
            <Button type="submit" variant="contained" color="primary" size="large">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default CourseRegistrationForm;
