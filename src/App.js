import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Login from './Components/Login';

function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<HomePage />} />
     <Route path='/login' element={<Login />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
