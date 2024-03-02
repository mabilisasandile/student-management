import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Read = () => {

  const { id } = useParams();
  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4041/read/'+id)
    .then(res => {
      console.log(res)
      setStudent(res.data[0]);
    })
    .catch(err => console.log(err));
  }, [])

  return (
    <div className='justify-content-center align-items-center'>
      <h2>Student Details</h2>
      <h3>{student.ID}</h3>
      <h3>{student.Name}</h3>
      <h3>{student.Email}</h3>
      <div>
        <Link to="/student" className='btn btn-primary me-2'>Back</Link>
        <Link to={`/update/${student.ID}`} className='btn btn-info'>Edit</Link>
      </div>
    </div>
  )
}

export default Read;