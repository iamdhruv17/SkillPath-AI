import React from 'react'

function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      quote: "SkillPath completely transformed how I learn. Building real-world projects helped me understand system design concepts that tutorials never could cover.",
      name: "Sarah Chen",
      role: "Frontend Engineer @ Vercel",
      initials: "SC"
    },
    {
      id: 2,
      quote: "The code reviews from senior developers were eye-opening. Having my pull requests thoroughly reviewed gave me the confidence to pass my technical interviews.",
      name: "Marcus Johnson",
      role: "Fullstack Developer @ Stripe",
      initials: "MJ"
    },
    {
      id: 3,
      quote: "The structured path took me from absolute zero to landing a junior developer internship in under 6 months. Best educational investment I've ever made.",
      name: "Elena Rostova",
      role: "Software Intern @ Adobe",
      initials: "ER"
    }
  ]

  return (
    <section className="testimonials-section">
      <div className="section-header">
        <span className="section-eyebrow">Success Stories</span>
        <h2 className="section-title">Reviewed by the Best, Hired by the Best</h2>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div key={t.id} className="testimonial-card">
            <p className="testimonial-quote">{t.quote}</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{t.initials}</div>
              <div className="testimonial-info">
                <h4>{t.name}</h4>
                <p>{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TestimonialSection
