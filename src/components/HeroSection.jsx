import CricketAnimation from './CricketAnimation'
import { scrollToSection } from '../utils/scrollToSection'

export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-zone hero-zone-top" />
      <div className="hero-zone hero-zone-bottom" />

      <div className="hero-frame">
        <div className="hero-red-bar" />
        <div className="hero-copy">
          <p className="eyebrow hero-reveal">VIJAYAWADA · ANDHRA PRADESH</p>
          <h1 className="hero-title hero-reveal">
            <span>ONE STOP</span>
            <span>SOLUTION FOR</span>
            <span>EVERY <em>SPORT.</em></span>
          </h1>
          <p className="hero-tagline hero-reveal">THE BEGINNING</p>
          <p className="hero-description hero-reveal">
            Your premium destination for personalized jerseys, professional cricket gear, and expert bat repair.
          </p>
          <div className="hero-cta-row hero-reveal">
            <button className="button button-dark speed-line" type="button" onClick={() => scrollToSection('#contact')}>Shop Now ↗</button>
            <button className="button button-light speed-line" type="button" onClick={() => scrollToSection('#contact')}>Contact Us</button>
          </div>
          <div className="pill-tags hero-reveal">
            <span>Cricket Gear</span>
            <span>Custom Jerseys</span>
            <span>Product Repairs</span>
          </div>
        </div>

        <div className="hero-visual">
          <span className="ghost-alpha">α</span>
          <CricketAnimation />
          <div className="hero-stat-stack">
            <div><strong>100+</strong><span>Happy Teams</span></div>
            <div><strong>52x</strong><span>Matches/Year</span></div>
            <div><strong>4</strong><span>Core Services</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
