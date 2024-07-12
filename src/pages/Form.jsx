import React, { useState } from 'react';

const Form = () => {
  const [fullName,   setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('http://172.16.100.112:8181/api/student/addStudent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
          dateOfBirth,
          address,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setFullName('');
      setEmail('');
      setPassword('');
      setDateOfBirth('');
      setAddress('');

      setSubmitting(false);
      setSubmitStatus('success');

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitting(false);
      setSubmitStatus('error');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Student Information Form</h1>
      <form onSubmit={handleSubmit} className="absolute top-[20%] max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={(e) =>   setFullName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dateOfBirth" className="block text-gray-700 font-bold mb-2">Date of Birth</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
          <textarea
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button type="submit" className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ${submitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
        {submitStatus === 'success' && (
          <p className="text-green-500 mt-2">Form submitted successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-500 mt-2">Failed to submit form. Please try again.</p>
        )}
      </form>
    </div>
  );
};

export default Form;
