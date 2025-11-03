// frontend/src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post(
                'https://forex-signal-backend-hx79.onrender.com/api/auth/register',
                formData
            );

            if (response.data.success) {
                alert('Account created successfully!');
                // Redirect to login or dashboard
                window.location.href = '/login';
            } else {
                setError(response.data.message || 'Failed to create account');
            }
        } catch (error) {
            setError(
                error.response?.data?.message || 
                'Network error. Please try again.'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-container">
            <h2>Create Account</h2>
            <p>Start receiving AI trading signals</p>
            
            {error && <div className="error-message">{error}</div>}
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                
                <button 
                    type="submit" 
                    disabled={loading}
                    className="submit-btn"
                >
                    {loading ? 'Creating Account...' : 'Create Account'}
                </button>
            </form>
        </div>
    );
};

export default Register;
