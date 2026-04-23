import useIntersection from '../hooks/useIntersection'
import { scrollToSection } from '../utils/scrollToSection'

export default function ClubBanner() {
  const [ref, visible] = useIntersection()

  return (
    <section className={`club-banner reveal ${visible ? 'is-visible' : ''}`} id="club-cricket" ref={ref}>
      <div className="container club-inner">
        <div className="club-copy">
          <p className="eyebrow">ALEPH CLUB PARTNERSHIP</p>
          <div className="live-indicator"><span /> REGISTRATION OPEN</div>
          <h2>
            <span>CLUB CRICKET</span>
            <span>MATCHES <em>EVERY WEEK!</em></span>
          </h2>
          <p>Connect with Aleph Sports for recurring club cricket fixtures, team gear, and match-ready support in Vijayawada.</p>
          <button className="button button-white speed-line" type="button" onClick={() => scrollToSection('#contact')}>Contact Us</button>
        </div>
        <svg className="club-bat" viewBox="0 0 160 520" aria-hidden="true">
          <path d="M62 24h36l8 260c1 36 25 67 25 111 0 57-24 98-51 98s-51-41-51-98c0-44 24-75 25-111Z" />
          <path d="M56 24V4h48v20" />
        </svg>
      </div>
    </section>
  )
}
