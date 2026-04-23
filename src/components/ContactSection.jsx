import Icon from './Icon'
import useIntersection from '../hooks/useIntersection'

export default function ContactSection({ contactItems }) {
  const [ref, visible] = useIntersection()

  return (
    <section className={`contact-section reveal ${visible ? 'is-visible' : ''}`} id="contact" ref={ref}>
      <div className="container">
        <p className="eyebrow eyebrow-dark">CONTACT</p>
        <h2 className="section-title">GET IN TOUCH</h2>
        <div className="contact-grid">
          {contactItems.map((item) => (
            <a href={item.href} target="_blank" rel="noreferrer" className="contact-card" key={item.label}>
              <span className="contact-icon"><Icon name={item.icon} /></span>
              <span>
                <span className="contact-label">{item.label}</span>
                <span className="contact-value">{item.value}</span>
              </span>
            </a>
          ))}
        </div>
        <div className="instagram-row">
          <h3>FOLLOW THE JOURNEY</h3>
          <a className="instagram-button" href="https://www.instagram.com/Aleph_Sports" target="_blank" rel="noreferrer">
            @Aleph_Sports
          </a>
        </div>
      </div>
    </section>
  )
}
