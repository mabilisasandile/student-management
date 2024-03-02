import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateStudent = () => {

    const [values, setValues] = useState({
        name: '',
        email: ''
    })
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState(0);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        // Form validation
        if (!values.name || !values.email) {
            alert('Please fill in all fields.');
            return;
        }

        axios.post('http://localhost:4041/student', values)
        .then(res => {
            console.log("Data stored:", res)
            navigate('/student');
        })
        .catch(err => {
            console.log("Error adding data:", err);
            // Display a user-friendly error message
            alert("Something went wrong. Unable to submit!");
        })

    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Add Student</h2>
                    {/* <div className='mb-2'>
                        <label htmlFor=''>ID</label>
                        <input type='number' placeholder='Enter ID' className='form-control'
                            onChange={e => setValues({...values, id: e.target.value})}
                        />
                    </div> */}
                    <div className='mb-2'>
                        <label htmlFor=''>Name</label>
                        <input type='text' placeholder='Enter Name' className='form-control'
                            onChange={e => setValues({...values, name: e.target.value})}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Email</label>
                        <input type='email' placeholder='Enter Email' className='form-control'
                            onChange={e => setValues({...values, email: e.target.value})}
                        />
                    </div>
                    <button type='submit' className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateStudent;
