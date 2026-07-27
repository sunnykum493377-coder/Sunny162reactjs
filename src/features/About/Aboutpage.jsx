import React from 'react'
import portfolioData from '../../Data/Portfolio'

const Aboutpage = () => {
  const profile = portfolioData[0]

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>About Me</h1>
        <h2 style={styles.name}>{profile.name}</h2>
        <p style={styles.bio}>{profile.fullbio}</p>

        <h3 style={styles.subTitle}>Skills</h3>
        <div style={styles.skillsWrap}>
          {profile.skills.technical.map((skill, index) => (
            <span key={index} style={styles.skill}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '16px',
    maxWidth: '700px',
    width: '100%',
    boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
  },
  title: {
    color: '#2563eb',
    marginBottom: '8px',
  },
  name: {
    marginBottom: '10px',
    color: '#111827',
  },
  bio: {
    color: '#4b5563',
    lineHeight: 1.6,
    marginBottom: '16px',
  },
  subTitle: {
    marginBottom: '8px',
    color: '#111827',
  },
  skillsWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  skill: {
    backgroundColor: '#dbeafe',
    color: '#1d4ed8',
    padding: '6px 10px',
    borderRadius: '999px',
  },
}

export default Aboutpage