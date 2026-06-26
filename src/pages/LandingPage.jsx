import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import FeatureCard from '../components/FeatureCard'
import TestimonialSection from '../components/TestimonialSection'
import CTABanner from '../components/CTABanner'
import Footer from '../components/Footer'

function LandingPage() {
  const features = [
    {
      id: 1,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      ),
      title: "Project-Driven Curriculum",
      description: "Build real production-ready applications. No basic todo list tutorials, but complex full-stack products from scratch."
    },
    {
      id: 2,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Industry Mentorship",
      description: "Receive actionable, line-by-line code feedback. Learn best practices, design patterns, and debugging from seasoned veterans."
    },
    {
      id: 3,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
      title: "Career Outcomes",
      description: "Our paths are aligned with current industry expectations. Graduate with a stellar portfolio and pass technical interviews easily."
    }
  ]

  return (
    <div className="page-container">
      <Navbar />
      <main>
        <HeroSection />
        
        <section className="features-section">
          <div className="section-header">
            <span className="section-eyebrow">Platform Features</span>
            <h2 className="section-title">Designed for Real Career Growth</h2>
          </div>
          <div className="features-grid">
            {features.map((feature) => (
              <FeatureCard 
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>
        
        <TestimonialSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
