import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Validation } from './services/SignupValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    useEffect(() => {
        setErrors(Validation(values));
    }, [values]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (errors.name === "" && errors.email === "" && errors.password === "") {
            try {
                axios.post('http://localhost:4041/signup', values)
                    .then(res => {
                        if (res = "Success") {
                            console.log("Server response:", res.data);
                            alert("Successfully signed up!");   // Display a user-friendly success message
                            navigate('/signin');
                        }
                    })

            } catch (error) {
                console.log("Error signing up:", error);
                // Display a user-friendly error message
                alert("Something went wrong. Unable to register!");
            }
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Name</strong></label>
                        <input type='text' placeholder='Enter Name' className='form-control rounded-0'
                            name='name' onChange={handleInput}
                        />
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' className='form-control rounded-0'
                            name='email' onChange={handleInput}
                        />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' className='form-control rounded-0'
                            name='password' onChange={handleInput}
                        />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Sign Up</strong></button>
                    <p>You agree to our terms and policies</p>
                    <Link to='/signin' className='btn btn-default border w-100 bg-light rounded-0'>Already have an account? <strong>Login</strong></Link>
                </form>
            </div>
        </div>
    );
};

export default Signup;
