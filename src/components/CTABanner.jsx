import React from 'react'
import { Link } from 'react-router-dom'

function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="cta-banner-content">
        <h2>Ready to Build Your Future?</h2>
        <p>Join thousands of aspiring developers today and transform your skills with direct, expert mentorship.</p>
        <Link to="/contact" className="btn btn-dark">
          Get Started Now
        </Link>
      </div>
    </section>
  )
}

export default CTABanner
