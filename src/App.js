import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import UsersList from "./components/UsersList"; // Assume this is implemented
import EditUser from "./components/EditUser"; // Assume this is implemented

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <div>
        <h1>EmployWise</h1>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Users route is protected; only accessible if token exists */}
          <Route
            path="/users"
            element={token ? <UsersList /> : <Navigate to="/login" />}
          />
          <Route
            path="/edit/:id"
            element={token ? <EditUser /> : <Navigate to="/login" />}
          />
          {/* Default route redirects to /login if no token is found */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
