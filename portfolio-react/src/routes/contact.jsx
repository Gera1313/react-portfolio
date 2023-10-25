import { useState } from "react";

// Define variables for form data
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validates form data
    const newErrors = {};

    // Checks if name is empty
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // check if email is empty
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/^\S+@\S+\.\S+$/.test(formData.email) //Regular expression for email validation
    ) {
      newErrors.email = 'Invalid email address';
    }

    setErrors(newErrors);

    // if no errors
    if (Object.keys(newErrors).length === 0) {
      // add submission logic here
      // For now, display the submitted data in the console
      console.log('Submitted Data:', formData);
    }
  };

  // input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

    return (
      <div>
        <h2>Contact Me</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Your message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
  export default Contact;