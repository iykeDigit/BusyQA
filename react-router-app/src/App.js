import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useParams } from 'react-router-dom';

function Dashboard() {
  return <h2>Dashboard</h2>;
}

function Login() {
  return <h2>Login</h2>;
}

function UserProfile() {
  const { id } = useParams();
  
  return (
    <>
      <div>
        <h2>User Profile</h2>
        <p>User ID: {id}</p>
      </div>
    </>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/dashboard" element={loggedIn ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
