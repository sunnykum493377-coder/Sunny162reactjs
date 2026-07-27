import React from 'react'
import { Link } from 'react-router-dom'
import portfolioData from '../../Data/Portfolio'

const Homepage = () => {
  const profile = portfolioData[0]

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.textSection}>
          <h1 style={styles.title}>Welcome</h1>
          <h2 style={styles.name}>Hi, I am {profile.name}</h2>

          {profile.bioLines.map((line, index) => (
            <p key={index} style={styles.bio}>{line}</p>
          ))}

          <Link to="/about" style={styles.button}>Know More</Link>
        </div>

        <div style={styles.imageSection}>
          <img src={profile.image} alt={profile.name} style={styles.image} />
        </div>
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    maxWidth: '900px',
    width: '100%',
    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
  },
  textSection: {
    flex: 1,
    minWidth: '280px',
  },
  title: {
    color: '#2563eb',
    marginBottom: '8px',
    fontSize: '28px',
  },
  name: {
    marginBottom: '12px',
    fontSize: '24px',
    color: '#111827',
  },
  bio: {
    margin: '0 0 10px',
    color: '#4b5563',
    lineHeight: 1.6,
  },
  button: {
    display: 'inline-block',
    marginTop: '12px',
    padding: '10px 16px',
    backgroundColor: '#2563eb',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
  },
  imageSection: {
    flex: 1,
    minWidth: '240px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '260px',
    borderRadius: '12px',
    objectFit: 'cover',
  },
}

export default Homepage
