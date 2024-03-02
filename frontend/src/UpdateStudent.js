import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateStudent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [values, setValues] = useState({
        name: '',
        email: ''
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4041/read/' + id)
            .then(res => {
                console.log(res)
                setValues({...values, name: res.data[0].Name, email: res.data[0].Email});
            })
            .catch(err => console.log(err));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:4041/update/' + id, { name, email })
            .then(res => {
                console.log(res);
                navigate('/student');
            }).catch(err => {
                console.log(err)
                alert("Something went wrong. Unable to update!");
            });
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Update Student</h2>
                    <div className='mb-2'>
                        <label htmlFor=''>Name</label>
                        <input type='text' placeholder={values.name} className='form-control'
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Email</label>
                        <input type='email' placeholder={values.email} className='form-control'
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-success' >Save</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateStudent