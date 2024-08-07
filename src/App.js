import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Formulario from './components/Formulario/Formulario';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './routes/PrivateRoute';
import Header from './components/Header/Header';
import { AuthProvider, AuthContext } from './context/AuthContext';

function App() {
  const [plansList, setPlansList] = useState([]);

  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage plansList={plansList} setPlansList={setPlansList} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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