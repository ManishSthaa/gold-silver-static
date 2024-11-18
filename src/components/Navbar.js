import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => (
  <nav style={{ background: '#333', padding: '10px' }}>
    <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
      <li style={{ marginRight: '20px' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
      </li>
      <li style={{ marginRight: '20px' }}>
        <Link to="/gold" style={{ color: '#fff', textDecoration: 'none' }}>Gold</Link>
      </li>
      <li>
        <Link to="/silver" style={{ color: '#fff', textDecoration: 'none' }}>Silver</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
