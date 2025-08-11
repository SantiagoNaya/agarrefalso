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
      
    </header>
  );
};

export default Header;
