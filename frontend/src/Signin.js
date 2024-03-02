
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Validation } from './services/LoginValidation';
import axios from 'axios';

const Signin = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setErrors(Validation(values));
    }, [])

    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (errors.email === "" && errors.password === "") {
            setLoading(true);
            axios.post('http://localhost:4041/login', values)
                .then(res => {
                    if (res.data === "Success") {
                        alert("Successfully signed in!");   // Display a user-friendly success message
                        navigate('/');
                    } 
                    else {
                        alert("Unable to login. No records found.")
                    }
                })
                .catch(err => {
                    console.log("Error signing in:", err);
                    // Display a user-friendly error message
                    alert("Something went wrong. Unable to login!");
                    setLoading(false);
                })

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