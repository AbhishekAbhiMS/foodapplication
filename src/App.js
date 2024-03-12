import './App.css';
import Headder from './Pages/Headder/Headder';
import Home from './Pages/Home/Home';
import Signup from './Pages/Singup/Singup';
import SignIn from './Pages/Singin/Singin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './Login';
import "./Pages/Common.css"
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
function App() {
  let loggedin=useSelector(state=>state.login.loggedin)
  const [islogin,setislogin]=useState(!!localStorage.getItem('login'))
  console.log(localStorage.getItem('login'),'qq');
  useEffect(()=>{
    setislogin(loggedin)
  },[loggedin])
  return (
    
    <Router>
     {/* <Login></Login> */} 
      <Headder />
      <Routes>
      
      <Route exact path="/"  element={islogin?<Home></Home>:<Signup></Signup>} />
        <Route  path='/home' element={<Home></Home>}/>
        <Route path="/about" element={<SignIn />} />
        <Route path="/contact" element={<Signup />} />
      </Routes>
     
    </Router>
    
       
       
       

  );
}

export default App;
