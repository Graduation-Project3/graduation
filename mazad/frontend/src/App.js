import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/home/Home'
import SignUp from './components/signUp/signUp'
import Login from './components/signIn/signIn';
function App() {

  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/signUp' element={<SignUp/>} />
      <Route path='/signIn' element={<Login/>} />

    </Routes>
 
       
  );
}

export default App;
