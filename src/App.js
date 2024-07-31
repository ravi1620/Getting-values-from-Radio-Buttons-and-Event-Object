
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element ={<Login/>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/navigation' element={<Navigation></Navigation>}></Route>
     </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
