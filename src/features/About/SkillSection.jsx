
import React from 'react'
import SkillCard from './SkillCard'


const SkillSection = ({ skills }) => {
  return (
    <div style={styles.section}>

      <h3 style={styles.heading}>Skills</h3>

     
      <div style={styles.cardRow}>
        {skills.map((skillGroup, index) => (
          <SkillCard
            key={index}
            category={skillGroup.category}
            items={skillGroup.items}
          />
        ))}
      </div>

    </div>
  )
}

const styles = {
  section: {
    marginBottom: '24px',
  },
  heading: {
    fontSize: '20px',
    color: '#111827',
    marginBottom: '16px',
  },
  cardRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
  },
}

export default SkillSection
