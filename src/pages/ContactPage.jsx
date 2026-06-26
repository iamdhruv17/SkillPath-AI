import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
    
    // Clear individual field errors when the user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSuccess(false)
    
    // Validation logic
    const tempErrors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.subject.trim()) {
      tempErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required'
    }

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors)
    } else {
      setErrors({})
      setIsSuccess(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }
  }

  return (
    <div className="page-container">
      <Navbar />
      <main className="contact-container">
        <div className="contact-layout">
          {/* Left Column: Contact Info Card */}
          <div className="contact-info-card">
            <div className="contact-info-header">
              <h2>Contact Info</h2>
              <p>Have questions about paths, curriculum, or career services? Reach out directly and our admissions team will respond shortly.</p>
            </div>
            
            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <h4>Email Admissions</h4>
                  <p>admissions@skillpath.edu</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <h4>Average SLA</h4>
                  <p>Within 24 business hours</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <h4>HQ Location</h4>
                  <p>San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="contact-info-footer">
              <p>SkillPath Global Inc. — Empowering future software engineers.</p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-container">
            <h3>Get in Touch</h3>
            
            {isSuccess && (
              <div className="success-banner" role="alert">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Thanks! Your message has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? 'input-error' : ''}`}
                  placeholder="Enter your name"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'input-error' : ''}`}
                  placeholder="name@example.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`form-input ${errors.subject ? 'input-error' : ''}`}
                  placeholder="What is your question regarding?"
                />
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-input ${errors.message ? 'input-error' : ''}`}
                  placeholder="Describe your request in detail..."
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-dark" style={{ width: '100%' }}>
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ContactPage
