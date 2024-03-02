
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Student from './Student';
import CreateStudent from './CreateStudent';
import UpdateStudent from './UpdateStudent';
import Read from './Read';
import Signin from './Signin';
import Signup from './Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/student' element={<Student />} />
          <Route path='/create' element={<CreateStudent />} />
          <Route path='/update/:id' element={<UpdateStudent />} />
          <Route path='/read/:id' element={<Read />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;