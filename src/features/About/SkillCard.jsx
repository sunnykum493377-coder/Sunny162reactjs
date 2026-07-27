

import React from 'react'

const SkillCard = ({ category, items }) => {
  return (
    <div style={styles.card}>

      {/* Category title — e.g. "Technical" */}
      <h4 style={styles.category}>{category}</h4>

      {/* Row of small tiles — one per skill */}
      {/* This is the INNER loop (loop 2) */}
      <div style={styles.tileRow}>
        {items.map((skill, index) => (
          <span key={index} style={styles.tile}>{skill}</span>
        ))}
      </div>

    </div>
  )
}

const styles = {
  card: {
    backgroundColor: 'white',
    padding: '16px 20px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
    minWidth: '200px',
  },
  category: {
    margin: '0 0 10px 0',
    color: '#1e293b',
    fontSize: '15px',
  },
  tileRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
  },
  tile: {
    backgroundColor: '#dbeafe',
    color: '#1d4ed8',
    padding: '4px 10px',
    borderRadius: '999px',
    fontSize: '13px',
  },
}

export default SkillCard
