import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auths/login.tsx';
import Signup from './components/auths/signup.tsx';
import Dashboard from './components/home/Dashboard.tsx';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
            <Route index path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />}>
            <Route path="meeting/:id" element={<div>Welcome to the meeting room</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
