import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// PASO OPCIONAL: Recibir props para el toggle de tema dark/light
const Navbar = ({ tema, toggleTema }) => {
  return (
    <nav className={`navbar navbar-expand-lg ${tema === 'dark' ? 'navbar-dark bg-dark border-bottom border-secondary' : 'navbar-light bg-light border-bottom border-light'}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">Mi Portafolio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Sobre mí</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Proyectos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contacto</Link>
            </li>
          </ul>
          <button className={`btn btn-sm rounded-pill ${tema === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'}`} onClick={toggleTema} style={{ minWidth: '100px', padding: '0.35rem 0.8rem' }}>
            {tema === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  tema: PropTypes.string,
  toggleTema: PropTypes.func,
};

export default Navbar;