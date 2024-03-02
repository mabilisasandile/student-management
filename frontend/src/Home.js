import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='justify-content-center align-items-center bg-primary vh-100'>
            <h1>Home</h1>
            <div>
                <Link to="/student" className='btn btn-info me-2'>VIEW ENROLLED STUDENTS</Link>
                <Link to="/signin" className='btn btn-primary me-2'>SIGN IN</Link>
            </div>
        </div>
    )
}

export default Home