import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    queryType: 'general',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState({ visible: false, message: '', type: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (!formData.consent) newErrors.consent = 'You must agree to the terms and conditions';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setNotification({
        visible: true,
        message: 'Please fill in all required fields',
        type: 'error',
      });
      setTimeout(() => {
        setNotification({ visible: false, message: '', type: '' });
      }, 3000);
    } else {
      console.log('Form data submitted:', formData);
      setNotification({
        visible: true,
        message: 'Your message has been sent successfully!',
        type: 'success',
      });
      setTimeout(() => {
        setNotification({ visible: false, message: '', type: '' });
      }, 3000);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        queryType: 'general',
        message: '',
        consent: false,
      });
    }
  };

  return (
    <div className="bg-[hsl(148,38%,91%)] min-h-screen pt-8">
    <div className="karla-regular max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      
      <form onSubmit={handleSubmit} noValidate>
      <div class="grid grid-cols-2 gap-4">
      <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg ${errors.firstName ? 'border-red-500' : ''}`}
          />
          {errors.firstName && <p className="text-red-500 text-sm text-left">{errors.firstName}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg ${errors.lastName ? 'border-red-500' : ''}`}
          />
          {errors.lastName && <p className="text-red-500 text-sm text-left">{errors.lastName}</p>}
        </div>
        </div>
        

        <div className="mb-4">
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm text-left">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Query Type</label>
          
            <div class="grid grid-cols-2 gap-4">
                <div>
            <input
              type="radio"
              name="queryType"
              value="general"
              checked={formData.queryType === 'general'}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="mr-4">General</label>
            </div>
            <div>

            <input
              type="radio"
              name="queryType"
              value="support"
              checked={formData.queryType === 'support'}
              onChange={handleChange}
              className="mr-2"
            />
            <label>Support</label>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg ${errors.message ? 'border-red-500' : ''}`}
            rows="4"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm text-left">{errors.message}</p>}
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className={`mr-2 ${errors.consent ? 'border-red-500' : ''}`}
            />
            <span className="text-gray-700">I agree to the terms and conditions</span>
          </label>
          {errors.consent && <p className="text-red-500 text-sm text-left">{errors.consent}</p>}
        </div>

        <button type="submit" className="w-full bg-[hsl(169,82%,27%)] text-white py-2 rounded-lg">
          Submit
        </button>
      </form>

      {notification.visible && (
        <div className={`mt-4 p-4 rounded-lg ${notification.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {notification.message}
        </div>
      )}
    </div>
    </div>
  );
};

export default ContactForm;