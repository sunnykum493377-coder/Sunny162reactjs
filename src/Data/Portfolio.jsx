

import profilePlaceholder from '../assets/profile-placeholder.svg'

const myData = {
  // ── Basic Info ──────────────────────────────────────────
  name: 'Sunny Kumar',
  tag: 'Full Stack Developer', 


  shortBio: [
    'I build simple and useful web experiences.',
    'I enjoy solving DSA problems on LeetCode.',
    'I am always learning something new every day.',
  ],

  
  fullBio:
    'I am Sunny Kumar, a passionate Full Stack Developer based in India. ' +
    'I love turning ideas into real, working web applications. ' +
    'My journey started with HTML and CSS, and I quickly fell in love with JavaScript and React. ' +
    'I also work with Node.js and MongoDB to build complete end-to-end applications. ' +
    'Outside of coding, I enjoy competitive programming and solving algorithmic challenges. ' +
    'I believe clean code and good design go hand in hand.',

  
  image: profilePlaceholder,

  skills: [
    {
      category: 'Technical',
      items: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'VS Code', 'Postman'],
    },
    {
      category: 'Soft Skills',
      items: ['Communication', 'Teamwork', 'Problem Solving', 'Time Management'],
    },
  ],

 
  projects: [
    {
      title: 'Portfolio Website',
      bio: 'A personal portfolio built with React to showcase my skills and projects.',
      tech: ['React', 'JavaScript', 'CSS'],
    },
    {
      title: 'Todo App',
      bio: 'A simple task manager with add, delete and mark-complete features.',
      tech: ['React', 'useState', 'LocalStorage'],
    },
    {
      title: 'Blog API',
      bio: 'A REST API for a blog platform with user authentication and CRUD operations.',
      tech: ['Node.js', 'Express', 'MongoDB'],
    },
  ],
}

export default myData
