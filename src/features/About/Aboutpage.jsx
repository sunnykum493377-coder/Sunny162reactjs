// Aboutpage.jsx  — route: /about
//
// This page has 4 parts:
//   1. Navbar       — the shared top bar
//   2. AbtHero      — the big bio paragraph
//   3. SkillSection — skill cards (data passed as prop)
//   4. ProjectSection — project cards (data passed as prop)
//
// myData is imported once here, then passed DOWN to child components as props
// That is the React "data flow" — parent holds data, children receive it

import React from 'react'
import myData from '../../Data/Portfolio'
import Navbar from '../../shared/Navbar'
import AbtHero from './AbtHero'
import SkillSection from './SkillSection'
import ProjectSection from './ProjectSection'

const Aboutpage = () => {
  return (
    <div style={styles.page}>

      {/* 1. Navbar at the top */}
      <Navbar />

      {/* Wrap the rest in a centered container */}
      <div style={styles.container}>

        {/* 2. Hero — pass fullBio as a prop called "bio" */}
        <AbtHero bio={myData.fullBio} />

        {/* 3. Skills — pass the skills array as a prop */}
        <SkillSection skills={myData.skills} />

        {/* 4. Projects — pass the projects array as a prop */}
        <ProjectSection projects={myData.projects} />

      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    maxWidth: '860px',
    margin: '0 auto',
    padding: '32px 20px',
  },
}

export default Aboutpage
