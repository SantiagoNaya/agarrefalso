// src/components/Header/Header.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './Header.css';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">AgarreFalso</Link>
      </div>
      <nav>
        <ul className="header-menu">
          {user ? (
            <>
              <li>Bienvenido, {user}</li>
              <li><Link to="/formulario">Gestionar Planes</Link></li>
              <li><button onClick={logout}>Cerrar Sesión</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Iniciar Sesión</Link></li>
              <li><Link to="/register">Registrarme</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
