import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileRegistration = ({ setProfile }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log({ formData, errors })

    return () => {
    }
  }, [formData, errors])


  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value)
    let data = { [name]: value }
    const validationErrors = validateForm(data, name)
    setErrors((prev) => ({ ...prev, ...validationErrors }))

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData, null);
    console.log("Checking validations");
    console.log(validationErrors);
    console.log(Object.values(validationErrors).filter(d => { return d !== '' }).length === 0)
    console.log("length", Object.keys(validationErrors).length);
    // if (Object.keys(validationErrors).length == 0) {
    if (Object.values(validationErrors).filter(d => { return d !== '' }).length === 0) {

      console.log("Redirect Initiated");
      navigate('/profile', { state: { profile: formData } });
      setProfile(true)
    } else {
      console.log("Redirect Not Initiated");
      console.log(formData);
      setProfile(false)
      setErrors(validationErrors);
    }
  };

  const validateForm = (data, name) => {
    const errors = {};


    // First name
    if (name === "firstName" || name === null) {
      if (data.firstName === "")
        errors.firstName = 'First name should not be empty';
      else if (!data.firstName.match(/^[a-zA-Z]+$/)) {
        errors.firstName = 'First name must contain only alphabets.';
      }
      else {
        errors.firstName = '';
      }
    }

    // Last name
    if (name === "lastName" || name === null) {
      if (data.lastName === "")
        errors.lastName = 'Last name should not be empty';
      else if (!data.lastName.match(/^[a-zA-Z]+$/)) {
        errors.lastName = 'Last name must contain only alphabets.';
      }
      else {
        errors.lastName = '';
      }
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    // Email
    if (name === "email" || name === null) {
      if (data.email === "")
        errors.email = 'Email should not be empty';
      // else if (!data.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/)) {
      else if (!data.email.match(emailRegex)) {
        errors.email = 'Invalid email address.';
      }
      else {
        errors.email = '';
      }
    }


    // Password
    if (name === "password" || name === null) {
      if (data.password === "")
        errors.password = 'Password should not be empty';
      else if (data.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long.';
      }
      else {
        errors.password = '';
      }
    }

    // Confirm Password
    if (name === "confirmPassword" || name === null) {
      if (data.confirmPassword === "")
        errors.confirmPassword = 'Confirm Password should not be empty';
      else if (formData.password !== data.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match.';
      } else if (data.confirmPassword.length < 8) {
        errors.confirmPassword = 'Password must be at least 8 characters long.';
      }
      else {
        errors.confirmPassword = '';
      }
    }

    return errors;
  };

  return (
    <div>
      {/* <h2>Profile Registration</h2> */}

      {/* <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>
        <button type="submit">Register</button>
      </form> */}

      <div id='reg-container' className="container d-flex justify-content-center">
        <div className="form card my-5">
          <h2 className='mb-4'>Profile Registration</h2>
          <div className="mb-1">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input name="firstName" type="text" className="form-control" id="firstName" placeholder="Enter your first name"
              // value={formData.firstName && formData.firstName}
              onChange={handleChange} tabIndex={1} />
            <div className="error">{errors.firstName}</div>
          </div>

          <div className="mb-1">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input name="lastName" type="text" className="form-control" id="lastName" placeholder="Enter your last name"
              // value={formData.lastName && formData.lastName}
              onChange={handleChange} tabIndex={2}
            />
            <div className="error">{errors.lastName}</div>
          </div>

          <div className="mb-1">
            <label htmlFor="emailInput" className="form-label">Email address</label>
            <input name="email" type="email" className="form-control" id="emailInput" placeholder="Enter your email"
              // value={formData.email && formData.email}
              onChange={handleChange} tabIndex={3}
            />
            <div className="error">{errors.email}</div>
          </div>

          <div className="mb-1">
            <label htmlFor="passwordInput" className="form-label">Password</label>
            <input name="password" type="password" className="form-control" id="passwordInput" placeholder="Password"
              // value={formData.password && formData.password}
              onChange={handleChange} tabIndex={4}
            />
            <div className="error">{errors.password}</div>
          </div>

          <div className="mb-1">
            <label htmlFor="cPasswordInput" className="form-label">Confirm Password</label>
            <input name="confirmPassword" type="password" className="form-control" id="cPasswordInput" placeholder="Confirm Password"
              // value={formData.confirmPassword && formData.confirmPassword}
              onChange={handleChange} tabIndex={5} />
            <div className="error">{errors.confirmPassword}</div>
          </div>

          <div className="d-flex justify-content-end">
            <div className="btn btn-primary mb-2" onClick={handleSubmit} id='register-btn' tabIndex={6}>Register</div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ProfileRegistration;
