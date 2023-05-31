// Importing necessary libraries and helper functions for the component.
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

// Function component "Contact" for the Contact section of the website.
function Contact() {

  // Using React useState hook to handle form state and error messages
  // formState is an object containing name, email, and message fields
  // errorMessage is a string for storing error messages related to form inputs
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');

  // Destructuring name, email, and message from formState
  const { name, email, message } = formState;

  // Function to handle form submission
  // It prevents the default form submission behavior and logs the form state if no errors exist
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  // Function to handle form input changes
  // It validates the input values and sets the error message and form state accordingly
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  // JSX for the Contact component
  return (
    <section>
      <h1 data-testid="h1tag">Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {/* Display error message if it exists */}
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

// Export the Contact component as default export.
export default Contact;
