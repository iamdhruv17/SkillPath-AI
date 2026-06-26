import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Skill<span>Path</span></h3>
          <p>Accelerate your coding career through immersive, project-based skill paths under the guidance of industry mentors.</p>
        </div>
        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li>
              <Link to="/" className="footer-link">Home</Link>
            </li>
            <li>
              <Link to="/about" className="footer-link">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="footer-link">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} SkillPath. All rights reserved.</p>
        <p>Built with Passion for Developers.</p>
      </div>
    </footer>
  )
}

export default Footer
