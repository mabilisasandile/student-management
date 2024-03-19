import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

const CreateStudent = () => {

    const [values, setValues] = useState({
        name: '',
        email: ''
    })

    const [id, setId] = useState(0);
    const navigate = useNavigate();

    let name = values.name;
    let email = values.email;

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate values
        if (!name || !email) {
            alert('Please fill in all fields.');
            return;
        }

        try {
            let response = await axios.post('http://localhost:4041/student', { name, email });
            console.log("Add student response:", response.data.message);
            navigate('/student');

        } catch (error) {
            console.log("Error adding data:", error);
            alert("Something went wrong. Unable to save!"); // Display a user-friendly error message
        }

    }

    return (
        <div className='grid-container'>

            <Header />
            <SideBar />

            <main className='main-container d-flex vh-100 justify-content-center align-items-center'>
                <div className='w-50 bg-white rounded p-3'>
                    <form onSubmit={handleSubmit}>
                        <h2 style={{color: 'black'}}>Add Student</h2>
                        <div className='mb-2'>
                            <label htmlFor=''>Name:</label>
                            <input type='text' placeholder='Enter Name' className='form-control'
                                onChange={e => setValues({ ...values, name: e.target.value })}
                            />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor=''>Email:</label>
                            <input type='email' placeholder='Enter Email' className='form-control'
                                onChange={e => setValues({ ...values, email: e.target.value })}
                            />
                        </div>
                        <button type='submit' className='btn btn-success'>Save</button>
                    </form>
                </div>
            </main>

        </div>
    );
}

export default CreateStudent;
