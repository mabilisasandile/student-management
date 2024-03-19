
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Student from './pages/Student';
import CreateStudent from './pages/CreateStudent';
import UpdateStudent from './pages/UpdateStudent';
import Read from './pages/Read';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Books from './pages/Books';
import AddBook from './pages/AddBook';
import UpdateBook from './pages/UpdateBook';
import Courses from './pages/Courses';
import AddCourse from './pages/AddCourse';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/student' element={<Student />} />
        <Route path='/create' element={<CreateStudent />} />
        <Route path='/update/:id' element={<UpdateStudent />} />
        <Route path='/read/:id' element={<Read />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/books' element={<Books />} />
        <Route path='/addbook' element={<AddBook />} />
        <Route path='/update' element={<UpdateBook />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/addcourse' element={<AddCourse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;