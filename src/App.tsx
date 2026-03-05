import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auths/login.tsx';
import Signup from './components/auths/signup.tsx';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={'Home page in the app file'} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/meeting/:id" element={`Meeting page for ID: ${window.location.pathname.split('/').pop()}`} />
      </Routes>
    </Router>
  );
}

export default App;
