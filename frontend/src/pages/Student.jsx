import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import '../App.css';
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Student = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4041')
            .then(res => setStudents(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:4041/student/' + id)
            window.location.reload()
            // Remove the deleted student from the state
            // setStudents(prevStudents => prevStudents.filter(student => student.ID !== id));
        } catch (error) {
            console.log(error);
            alert("Something went wrong. Unable to delete!");
        }
    }

    return (
        <div className='grid-container'>
            <Header />
            <SideBar />
            <main className='main-container d-flex vh-100 justify-content-center align-items-center'>               
                <div className='w-50 bg-white rounded p-3'>

                    <h2 style={{color: 'black'}}>List of Students</h2>

                    <div className="d-flex justify-content-end">
                        <Link to="/create" className='btn btn-success'>Create +</Link>
                    </div>

                    <table className='table'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.length > 0 ?
                                students.map((data, i) => (
                                    <tr key={i}>
                                        <td>{data.ID}</td>
                                        <td>{data.Name}</td>
                                        <td>{data.Email}</td>
                                        <td>
                                            <Link to={`read/${data.ID}`} className="btn btn-sm btn-info">Read</Link>
                                            <Link to={`update/${data.ID}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                                            <button className='btn btn-sm btn-danger ms' onClick={(e) => handleDelete(data.ID)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                                :
                                <tr>
                                    <td colSpan="2">
                                        <h3>Loading...</h3>
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </main>

        </div>

    );
}

export default Student;
