
import React from 'react'
import ProjectCard from './ProjectCard'

// projects prop = the array from myData.projects
const ProjectSection = ({ projects }) => {
  return (
    <div style={styles.section}>

      <h3 style={styles.heading}>Projects</h3>

      {/* Loop — one ProjectCard per project */}
      <div style={styles.cardRow}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            bio={project.bio}
            tech={project.tech}
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

export default ProjectSection
