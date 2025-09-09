import React, { useState, useEffect } from 'react';
import { Mail, User as UserIcon, Phone, MapPin, Briefcase, Save, Loader } from 'lucide-react';
import './UserForm.css';

const UserForm = ({ user, onSave, isLoading }) => {
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    phone: '',
    address: '',
    occupation: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user) {
      setFormData({
        displayName: user.displayName || '',
        email: user.email || '',
        phone: user.phone || '',
        address: user.address || '',
        occupation: user.occupation || '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: null }));
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.displayName) newErrors.displayName = 'Display Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSave(formData);
    }
  };

  return (
    <form className="user-profile-form" onSubmit={handleSubmit}>
      <div className="form-content-scrollable">
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <div className="input-with-icon">
              <UserIcon size={18} className="input-icon" />
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your Full Name"
                disabled={isLoading}
                className={errors.fullName ? 'input-error' : ''}
              />
            </div>
            {errors.fullName && <p className="error-message">{errors.fullName}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-with-icon">
              <Mail size={18} className="input-icon" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                disabled={isLoading}
                className={errors.email ? 'input-error' : ''}
              />
            </div>
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <div className="input-with-icon">
              <Phone size={18} className="input-icon" />
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g., +1 (555) 123-4567"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="occupation">Occupation</label>
            <div className="input-with-icon">
              <Briefcase size={18} className="input-icon" />
              <input
                type="text"
                id="occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                placeholder="e.g., Attorney, Legal Analyst"
                disabled={isLoading}
              />
            </div>
          </div>
          
          <div className="form-group full-width">
            <label htmlFor="address">Address</label>
            <div className="input-with-icon">
              <MapPin size={18} className="input-icon" />
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your Street Address, City, State, Zip"
                disabled={isLoading}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="form-actions">
        <button
          type="submit"
          disabled={isLoading}
          className="btn-save"
        >
          {isLoading ? (
            <>
              <Loader className="spinning" size={16} /> Saving...
            </>
          ) : (
            <>
              <Save size={16} /> Save
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default UserForm;
