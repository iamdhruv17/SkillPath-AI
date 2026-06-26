import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection() {
  const steps = [
    { id: 1, title: 'Pick a skill path', desc: 'Choose from frontend, backend, fullstack, or mobile dev.', completed: true },
    { id: 2, title: 'Build real projects', desc: 'Work on production-grade web apps with real tools.', completed: true },
    { id: 3, title: 'Get reviewed by mentors', desc: 'Receive code reviews and feedback from expert engineers.', completed: true },
    { id: 4, title: 'Land your first internship', desc: 'Prepare for interviews and connect with hiring companies.', completed: false },
  ]

  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="hero-eyebrow">Interactive Learning Platform</span>
        <h1 className="hero-title">
          Master Coding by <span>Building Projects</span>
        </h1>
        <p className="hero-desc">
          Skip generic tutorials. Learn by constructing production-ready applications with direct code reviews from professional mentors. Walk the path that leads to your dream job.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="btn btn-primary">
            Get Started
          </Link>
          <Link to="/about" className="btn btn-outline">
            How it works
          </Link>
        </div>
      </div>
      
      <div className="stepper-container">
        <div className="stepper-header">Your Skill Path Journey</div>
        <div className="stepper">
          {steps.map((step) => (
            <div key={step.id} className="step-item">
              <div className={`step-dot ${step.completed ? 'completed' : ''}`}>
                {step.completed ? (
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  step.id
                )}
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
