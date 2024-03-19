
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Validation } from '../services/LoginValidation';
import axios from 'axios';

const Signin = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    let email = values.email;
    let password = values.password;

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors(Validation(values));

        if (errors.email === "" && errors.password === "") {
            setLoading(true);

            try {
                let response = await axios.post('http://localhost:4041/login', { email, password });
                console.log(response.data.message);
                alert("Successfully signed in.");
                navigate('/');

            } catch (error) {
                console.log("Error signing in:", error);               
                alert("Failed to sign in!");
                setLoading(false);
            }
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-In</h2>
                <form action='' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' className='form-control rounded-0' name='email' onChange={handleInput} />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' className='form-control rounded-0' name='password' onChange={handleInput} />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'><strong>{loading ? "Signing In..." : "Sign In"}</strong></button>
                    <p>You agree to our terms and policies</p>
                    <Link to='/signup' className='btn btn-default border w-100 bg-light rounded-0'>Create Account</Link>
                </form>
            </div>
        </div>
    );
}

export default Signin;