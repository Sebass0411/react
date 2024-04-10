import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import ThemeToggler from './ThemeToggler';
import ThemeContext from './ThemeContext';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Inicio from './Inicio';
import Consultas from './Consultas';
import Servicios from './Servicios';
import Registro from './Registro';
import Login from './Login';
import './App.css';

function App() {
  return (
    <ThemeProvider>
    <Router>

      <div>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/consultas">Consultas</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/registro">Registro</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/consultas" element={<Consultas />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Inicio />} />
        </Routes>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
