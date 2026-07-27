// Navbar.jsx
// Shared component — used on About page and Contact page
// Home page does NOT use this (Home is minimal by design)
//
// Layout:  [Your Name]   [About  Contact]   [Full Stack Developer]
//               left          center                right

import React from 'react'
import { NavLink } from 'react-router-dom'
import myData from '../Data/Portfolio'   // name and tag come from here

const Navbar = () => {
  return (
    <nav style={styles.nav}>

      {/* LEFT — name from data file, not hardcoded */}
      <span style={styles.name}>{myData.name}</span>

      {/* CENTER — two page links */}
      <div style={styles.center}>
        <NavLink
          to="/about"
          style={({ isActive }) => isActive ? styles.activeLink : styles.link}
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          style={({ isActive }) => isActive ? styles.activeLink : styles.link}
        >
          Contact
        </NavLink>
      </div>

      {/* RIGHT — job tag from data file, not hardcoded */}
      <span style={styles.tag}>{myData.tag}</span>

    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 32px',
    backgroundColor: '#1e293b',
    color: 'white',
  },
  name: {
    fontWeight: 'bold',
    fontSize: '18px',
    color: 'white',
  },
  center: {
    display: 'flex',
    gap: '32px',
  },
  link: {
    color: '#94a3b8',
    textDecoration: 'none',
    fontSize: '15px',
  },
  activeLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '15px',
    borderBottom: '2px solid #3b82f6',
    paddingBottom: '2px',
  },
  tag: {
    fontSize: '13px',
    color: '#3b82f6',
    fontWeight: '600',
  },
}

export default Navbar
