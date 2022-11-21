import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { id: 1, path: '/', text: 'Home' },
  { id: 2, path: '/detail', text: 'Detail' },
];

const Navbar = () => (
  <nav>
    <h1>Bit Ticker</h1>
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <NavLink to={link.path} end>
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
