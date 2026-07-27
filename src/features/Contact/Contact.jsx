// Contact.jsx  — route: /contact
//
// This page has 3 parts:
//   1. Navbar  — same shared component used on About page
//   2. Form    — 3 controlled inputs (Name, Email, Phone)
//   3. Confirmation card — only appears AFTER form is submitted
//
// "Controlled input" means React state tracks every keystroke
// Nothing is managed by the browser — React is always in charge

import React, { useState } from 'react'
import Navbar from '../../shared/Navbar'
import myData from '../../Data/Portfolio'

const Contact = () => {

  // formData holds what the user has typed in each field
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })

  // isSubmitted — false at start, becomes true when Send is clicked
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Runs on every keystroke in any input
  // e.target.name tells us WHICH input changed (name / email / phone)
  // e.target.value is what the user typed
  const handleChange = (e) => {
    setFormData({
      ...formData,                      // keep the other 2 fields unchanged
      [e.target.name]: e.target.value,  // update only the one being typed in
    })
  }

  // Runs when Send button is clicked
  // e.preventDefault() stops the page from refreshing
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div style={styles.page}>

      {/* 1. Navbar — same component as About page */}
      <Navbar />

      <div style={styles.container}>

        <h2 style={styles.heading}>Contact Me</h2>

        {/* 2. The form */}
        <form onSubmit={handleSubmit} style={styles.form}>

          <label style={styles.label}>Name</label>
          <input
            style={styles.input}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />

          <label style={styles.label}>Email</label>
          <input
            style={styles.input}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
          />

          <label style={styles.label}>Phone Number</label>
          <input
            style={styles.input}
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            required
          />

          <button style={styles.button} type="submit">Send</button>

        </form>

        {/* 3. Confirmation card — only renders when isSubmitted is true */}
        {isSubmitted && (
          <div style={styles.confirmCard}>
            <p>
              Hello <strong>{formData.name}</strong>, your mail has been successfully sent.
            </p>
            <p>
              <strong>{myData.name}</strong> will contact you soon!
            </p>
          </div>
        )}

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
    maxWidth: '480px',
    margin: '0 auto',
    padding: '40px 20px',
  },
  heading: {
    fontSize: '24px',
    color: '#111827',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '14px',
    color: '#374151',
    fontWeight: '600',
    marginTop: '10px',
  },
  input: {
    padding: '10px 12px',
    fontSize: '15px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    outline: 'none',
  },
  button: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  confirmCard: {
    marginTop: '28px',
    padding: '16px 20px',
    backgroundColor: '#ecfdf5',
    border: '1px solid #6ee7b7',
    borderRadius: '8px',
    color: '#065f46',
    lineHeight: '1.7',
    fontSize: '15px',
  },
}

export default Contact
