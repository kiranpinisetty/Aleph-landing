import Icon from './Icon'
import useIntersection from '../hooks/useIntersection'

export default function ServicesSection({ services }) {
  const [ref, visible] = useIntersection()

  return (
    <section className={`services-section reveal ${visible ? 'is-visible' : ''}`} id="services" ref={ref}>
      <div className="section-red-rule" />
      <div className="container">
        <p className="eyebrow">WHAT WE OFFER</p>
        <h2 className="section-title">PREMIUM SERVICES</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <span className="service-number">{String(index + 1).padStart(2, '0')}</span>
              <div className="service-icon"><Icon name={service.icon} /></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact">{`→ ${service.action}`}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
