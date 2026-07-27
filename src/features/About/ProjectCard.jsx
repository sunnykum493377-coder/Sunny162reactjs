// ProjectCard.jsx
// ONE reusable card for ONE project
// Used for EVERY project — not copy-pasted per project
//
// Props it receives from ProjectSection:
//   title  → project name
//   bio    → short description
//   tech   → array of technologies used, e.g. ["React", "CSS"]

import React from 'react'

const ProjectCard = ({ title, bio, tech }) => {
  return (
    <div style={styles.card}>

      {/* Project title */}
      <h4 style={styles.title}>{title}</h4>

      {/* Short description */}
      <p style={styles.bio}>{bio}</p>

      {/* Row of tech tags — loop over the tech array */}
      <div style={styles.tagRow}>
        {tech.map((item, index) => (
          <span key={index} style={styles.tag}>{item}</span>
        ))}
      </div>

    </div>
  )
}

const styles = {
  card: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    width: '280px',
  },
  title: {
    margin: '0 0 8px 0',
    color: '#1e293b',
    fontSize: '16px',
  },
  bio: {
    color: '#4b5563',
    fontSize: '14px',
    lineHeight: '1.5',
    marginBottom: '12px',
  },
  tagRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
  },
  tag: {
    backgroundColor: '#fef3c7',
    color: '#92400e',
    padding: '4px 10px',
    borderRadius: '999px',
    fontSize: '12px',
  },
}

export default ProjectCard
