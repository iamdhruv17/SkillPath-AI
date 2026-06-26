import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand" onClick={closeMenu}>
        Skill<span>Path</span>
      </NavLink>
      
      <button 
        className="navbar-menu-toggle" 
        onClick={toggleMenu} 
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <svg viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          ) : (
            <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          )}
        </svg>
      </button>

      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
            onClick={closeMenu}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
