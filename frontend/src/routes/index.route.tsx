import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "../pages/home/Homepage";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";

// Component for defining application routes
const AppRoutes = () => {
  // Check if user is authenticated (dummy value for demonstration)
  const user = false;

  return (
    // Wrap routes with BrowserRouter to enable routing
    <BrowserRouter>
      {/* Define application routes */}
      <Routes>
        {/* Route for homepage, redirects to homepage if user is authenticated, otherwise redirects to login */}
        {user ? (
          <Route path="/" element={<Homepage />} />
        ) : (
          <Route path="/" element={<Navigate to="/login" />} />
        )}
        {/* Route for registration page, redirects to homepage if user is authenticated, otherwise renders registration page */}
        {user ? (
          <Route path="/register" element={<Navigate to="/" />} />
        ) : (
          <Route path="/register" element={<Register />} />
        )}
        {/* Route for login page, redirects to homepage if user is authenticated, otherwise renders login page */}
        {user ? (
          <Route path="/login" element={<Navigate to="/" />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
        {/* Route for 404 not found page, renders 404 not found page if no route matche*/}
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
