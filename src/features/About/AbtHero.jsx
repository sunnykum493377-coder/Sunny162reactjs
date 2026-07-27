
import React from 'react'
const AbtHero = ({ bio }) => {
  return (
    <div style={styles.box}>
      <h2 style={styles.title}>About Me</h2>
      <p style={styles.bio}>{bio}</p>
    </div>
  )
}

const styles = {
  box: {
    backgroundColor: 'white',
    padding: '28px',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    marginBottom: '24px',
  },
  title: {
    color: '#2563eb',
    marginBottom: '12px',
  },
  bio: {
    color: '#4b5563',
    lineHeight: '1.8',
    fontSize: '16px',
  },
}

export default AbtHero
