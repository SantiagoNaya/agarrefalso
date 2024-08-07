import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const userInLocalStorage = localStorage.getItem('user');
    if (userInLocalStorage) {
      try {
        const storedUser = JSON.parse(userInLocalStorage);
        const storedToken = localStorage.getItem('token');
        if (storedUser && storedToken) {
          setUser(storedUser);
          setToken(storedToken);
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Correo o contraseña incorrectos.',
        });
      }
    }
  }, []);

  const login = async (email, password) => {
    console.log("email, password", { email, password });
    try {
      let contrasena = password;
      const response = await axios.post('http://localhost:8888/login', { email, contrasena });
      if(!response.data.success){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Correo o contraseña incorrectos.',
        });
        return false;
      }
      const userData = email;
      const tokenData = response.data.accessToken;
      setUser(userData);
      setToken(tokenData);
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', tokenData);
      return true;
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Correo o contraseña incorrectos.',
      });
      return false;
    }
  };

  const register = async (nombre, email, contrasena) => {
    console.log("nombre, email, contrasena", { nombre, email, contrasena });
    try {
      const response = await axios.post('http://localhost:8888/register', { nombre, email, contrasena });
      const userData = response.data.user;
      const tokenData = response.data.token;
      setUser(userData);
      setToken(tokenData);
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', tokenData);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Correo o contraseña incorrectos.',
      });
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
