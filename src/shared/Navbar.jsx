
import React from 'react'
import { NavLink } from 'react-router-dom'
import myData from '../Data/Portfolio'

const Navbar = () => {
  return (
    <nav style={styles.nav}>

      <span style={styles.name}>{myData.name}</span>

      <div style={styles.links}>
        <NavLink
          to="/about"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          style={({ isActive }) =>
            isActive ? { ...styles.link, ...styles.activeLink } : styles.link
          }
        >
          Contact
        </NavLink>
      </div>

      
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
  links: {
    display: 'flex',
    gap: '32px',
  },
  link: {
    color: '#94a3b8',             // muted grey
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '500',
  },
  activeLink: {
    color: 'white',
    borderBottom: '2px solid #3b82f6',  // blue underline on active page
    paddingBottom: '2px',
  },
  tag: {
    fontSize: '13px',
    color: '#3b82f6',             // blue accent
    fontWeight: '600',
  },
}

export default Navbar
