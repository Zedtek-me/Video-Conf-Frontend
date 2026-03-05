import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={'Home page in the app file'} />
        <Route path="/meeting/:id" element={`Meeting page for ID: ${window.location.pathname.split('/').pop()}`} />
      </Routes>
    </Router>
  );
}

export default App;
