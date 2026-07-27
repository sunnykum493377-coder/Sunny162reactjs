// Homepage.jsx  — route: /
// NO Navbar on this page (intentionally minimal)
// Everything shown comes from myData — nothing is hardcoded

import React from 'react'
import { useNavigate } from 'react-router-dom'
import myData from '../../Data/Portfolio'

const Homepage = () => {

  // useNavigate lets us move to another page on button click
  const navigate = useNavigate()

  return (
    <div style={styles.page}>

      {/* Welcome heading */}
      <h1 style={styles.welcome}>Welcome</h1>

      {/* Name pulled from data file */}
      <h2 style={styles.name}>Hi, I am {myData.name}</h2>

      {/* Short bio — myData.shortBio is an array, so we loop over it */}
      {myData.shortBio.map((line, index) => (
        <p key={index} style={styles.bio}>{line}</p>
      ))}

      {/* Profile image inside a card */}
      <div style={styles.card}>
        <img src={myData.image} alt="profile" style={styles.image} />
      </div>

      {/* Know More button — goes to /about when clicked */}
      <button style={styles.button} onClick={() => navigate('/about')}>
        Know More
      </button>

    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f4f6',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  welcome: {
    fontSize: '32px',
    color: '#2563eb',
    margin: '0 0 8px 0',
  },
  name: {
    fontSize: '24px',
    color: '#111827',
    margin: '0 0 16px 0',
  },
  bio: {
    color: '#4b5563',
    margin: '4px 0',
    fontSize: '16px',
  },
  card: {
    marginTop: '24px',
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  image: {
    width: '180px',
    height: '180px',
    borderRadius: '8px',
    objectFit: 'cover',
    display: 'block',
  },
  button: {
    marginTop: '24px',
    padding: '10px 28px',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
  },
}

export default Homepage
