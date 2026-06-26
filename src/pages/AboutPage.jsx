import React from 'react'
import Navbar from '../components/Navbar'
import FeatureCard from '../components/FeatureCard'
import Footer from '../components/Footer'

function AboutPage() {
  const cards = [
    {
      id: 1,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      title: "Our Core Purpose",
      description: "To bridge the gap between academic theory and practical software engineering by focusing on real-world development and best practices."
    },
    {
      id: 2,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
          <line x1="6" y1="8" x2="6" y2="8" />
          <line x1="10" y1="8" x2="10" y2="8" />
          <line x1="14" y1="8" x2="14" y2="8" />
          <polyline points="6 14 10 12 6 10" />
        </svg>
      ),
      title: "What We Teach",
      description: "Modern, high-demand stacks (Vite, React, Node.js, SQL/NoSQL), system design, testing, CI/CD, and professional Git workflows."
    },
    {
      id: 3,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Who It's For",
      description: "Aspiring developers, career switchers, and CS graduates who want to supercharge their portfolios and practical technical capabilities."
    },
    {
      id: 4,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      title: "The Ultimate Outcome",
      description: "Confidence in writing clean code, a standout GitHub portfolio, readiness for professional workflows, and landing developer positions."
    }
  ]

  return (
    <div className="page-container">
      <Navbar />
      <main>
        <section className="about-hero">
          <div className="about-hero-content">
            <span className="section-eyebrow">About SkillPath</span>
            <h1>Reimagining Software Engineering Education</h1>
            <p>
              We believe coding is a craft best learned by doing. SkillPath provides structured, industry-aligned project roadmaps combined with direct line-by-line feedback from experienced senior engineers. We replace boring tutorials with high-impact creation.
            </p>
          </div>
        </section>
        
        <section className="about-grid-section">
          <div className="about-grid-container">
            <div className="features-grid">
              {cards.map((card) => (
                <FeatureCard 
                  key={card.id}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AboutPage
