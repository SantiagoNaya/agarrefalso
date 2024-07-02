// src/App.js
import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Formulario from './components/Formulario/Formulario';
import Login from './components/Login/Login';
import PrivateRoute from './routes/PrivateRoute';
import { AuthProvider, AuthContext } from './context/AuthContext';

function App() {
  const [plansList, setPlansList] = useState([]);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage plansList={plansList} />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/formulario"
            element={
              <PrivateRoute role="admin">
                <Formulario plansList={plansList} setPlansList={setPlansList} />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
