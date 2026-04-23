import './App.css'

const images = {
  hero: 'https://cdn.pixabay.com/photo/2015/04/15/21/06/cricket-724615_1280.jpg',
  jersey: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&fm=jpg&q=80&w=1400',
  gearBat: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAetJ8UTa7v95VsADompKR2RiooSDpKV8ncTLZ4uzRW5T5gC0TOlG_sq6tBoiovAQ2s4ddslBgCJ7tGwuy7st31m2cG3mOtFAdbjIv7NNFwZCSPwhvL7p6Y34Ole9_TYWAKCxXI0Z-qSY2_8ea5p4yYDsiY5AU9vnfv60KsxmEE0FoehZWIQkWsXx5ygTXIFlGbJ0Kv-sw-i__3VcdPQ2WBxU4jUrvHrv2sp3-WEdO5CMaLrVlq3czkCmi_GPiSGZylONayYDpz8YBP'
}

const navLinks = [
  ['Home', '#home'],
  ['Services', '#services'],
  ['Club Cricket', '#clubcricket'],
  ['Contact', '#contact']
]

const serviceCards = [
  ['design_services', 'Customised Jerseys', 'High-performance fabrics tailored to your team standards with precise fit and premium finishing.'],
  ['sports_cricket', 'Cricket Gear', 'Professional-grade bats, pads, gloves, and helmets engineered for control, balance, and safety.'],
  ['build', 'Product Repairs', 'Expert restoration services that extend gear life and bring your equipment back to peak condition.'],
  ['workspace_premium', 'Tournament Kits', 'Complete team kit bundles with jersey sets, numbering, and coordinated match-day accessories.'],
  ['verified', 'Quality Assurance', 'Each order goes through strict checks for stitching quality, color consistency, and size accuracy.'],
  ['bolt', 'Fast Turnaround', 'Reliable production timelines and responsive support for urgent team orders and upcoming fixtures.']
]

function Icon({ name }) {
  return <span className="material-symbols-outlined" aria-hidden="true">{name}</span>
}

function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function App() {
  return (
    <main className="aleph-page">
      <nav className="nav-shell">
        <button className="nav-brand" type="button" onClick={() => scrollTo('#home')}>
          <img src="/assets/logo.jpg" alt="Aleph Sports logo" />
          <span>ALEPH SPORTS</span>
        </button>
        <div className="nav-links">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>
        <button className="nav-cta speed-line" type="button" onClick={() => scrollTo('#contact')}>Contact Us</button>
      </nav>

      <section className="hero" id="home" style={{ '--hero-image': `url(${images.hero})` }}>
        <div className="hero-content">
          <p className="kicker">ALEPH SPORTS · THE BEGINNING</p>
          <h1>One Stop Solution <span>For Every Sport Need..!</span></h1>
          <p>
            Welcome to Aleph Sports — The Beginning. From vibrant customized jerseys to professional bat knocking
            and expert gear restoration, we elevate your game.
          </p>
          <div className="hero-actions">
            <button className="speed-line" type="button" onClick={() => scrollTo('#contact')}>Start Enquiry</button>
            <a href="#gear">Explore Gear</a>
          </div>
        </div>
      </section>

      <section className="section services-overview" id="services">
        <div className="section-heading compact services-heading">
          <span />
          <div>
            <h2>Our Services</h2>
          </div>
        </div>
        <div className="services-overview-grid">
          {serviceCards.map(([icon, title, copy], index) => (
            <article className={`service-overview-card ${index === 1 ? 'is-featured' : ''}`} key={title}>
              <div className="service-card-icon-ghost" aria-hidden="true">
                <Icon name={icon} />
              </div>
              <div className="service-card-icon-chip">
                <Icon name={icon} />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section jerseys" id="jerseys">
        <p className="section-side-label">01 JERSEYS</p>
        <div className="section-heading">
          <span />
          <div>
            <p className="kicker dark">CUSTOMISED JERSEYS</p>
            <h2>Customised Jerseys</h2>
          </div>
        </div>
        <div className="jersey-layout">
          <div className="jersey-copy-block">
            <p className="jersey-intro">
              We deliver any customised jersey with best-in-class quality, pro-grade comfort, and long-lasting color finish.
              From local club kits to tournament uniforms, your team gets a clean, premium look every time.
            </p>
            <div className="jersey-cards-grid">
              <article className="jersey-card">
                <Icon name="layers" />
                <h3>Sublimation</h3>
                <p>Vibrant, fade-resistant designs fused into breathable performance fabrics.</p>
              </article>
              <article className="jersey-card">
                <Icon name="texture" />
                <h3>Embroidery</h3>
                <p>Durable stitched logos and crests for a premium textured finish.</p>
              </article>
              <article className="jersey-card">
                <Icon name="humidity_high" />
                <h3>Moisture Control</h3>
                <p>Lightweight, sweat-managing materials built for long sessions and match day heat.</p>
              </article>
              <article className="jersey-card">
                <Icon name="verified" />
                <h3>Team Fit Accuracy</h3>
                <p>Consistent sizing and quality checks so every player gets the right fit.</p>
              </article>
            </div>
          </div>
          <div className="jersey-media">
            <div className="jersey-media-frame" />
            <img src={images.jersey} alt="High-quality customised jersey fabric with premium stitched detailing" />
          </div>
        </div>
      </section>

      <section className="club-banner-main" id="clubcricket">
        <div className="club-banner-speedlines" />
        <div className="club-banner-main-inner">
          <h2>Club Cricket Matches Every Week!</h2>
          <div className="club-banner-main-icon" aria-hidden="true">
            <Icon name="sports_cricket" />
          </div>
          <button className="speed-line" type="button" onClick={() => scrollTo('#contact')}>Join The Roster</button>
        </div>
      </section>

      <section className="section gear-showcase" id="gear">
        <p className="section-side-label">03 GEAR</p>
        <div className="section-heading compact">
          <span />
          <div>
            <h2>Pro Cricket Gear</h2>
          </div>
        </div>
        <div className="gear-bento-grid">
          <article className="gear-bat-tile">
            <img src={images.gearBat} alt="Professional cricket bat resting on pitch grass with cinematic lighting" />
            <div className="gear-bat-copy">
              <h3>English Willow</h3>
              <p>Hand-selected clefts, perfectly balanced for maximum power transfer and minimal vibration.</p>
            </div>
          </article>
          <article className="gear-protection-tile">
            <div className="mini-accent" />
            <div>
              <h3>Protective Gear</h3>
              <p>High-density foam padding, lightweight leg guards, and reinforced gloves.</p>
            </div>
            <Icon name="shield" />
          </article>
          <article className="gear-balls-tile">
            <div>
              <h3>Match Balls</h3>
              <p>Alum tanned leather, hand-stitched seam for superior grip and swing dynamics.</p>
            </div>
            <Icon name="sports_baseball" />
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-side-label contact-side-label">04 CONTACT</p>
        <div className="contact-header">
          <p className="kicker">ENQUIRY DESK</p>
          <h2>Connect With Us</h2>
        </div>
        <div className="contact-layout">
          <div className="contact-info">
            <h3>Aleph Sports</h3>
            <a href="tel:+919491581580"><Icon name="call" /> +91 9491581580</a>
            <a href="mailto:alephsportsinfo@gmail.com"><Icon name="mail" /> alephsportsinfo@gmail.com</a>
            <a href="https://maps.google.com/?q=Opp.%20TTD%20Kalyanamandapam%2C%20Vijayawada%20520010" target="_blank" rel="noreferrer">
              <Icon name="location_on" /> Opp. TTD Kalyanamandapam, Vijayawada - 520 010
            </a>
            <a href="https://www.instagram.com/Aleph_Sports" target="_blank" rel="noreferrer"><Icon name="alternate_email" /> @Aleph_Sports</a>
          </div>
          <form className="enquiry-form">
            <label>Full Name<input type="text" name="name" placeholder="Your name" /></label>
            <label>Phone Number<input type="tel" name="phone" placeholder="+91" /></label>
            <label>
              Service Required
              <select name="service" defaultValue="">
                <option value="" disabled>Select a service</option>
                <option>Custom Jerseys</option>
                <option>Bat Knocking</option>
                <option>Product Repairs</option>
                <option>Cricket Gear</option>
                <option>Club Matches</option>
              </select>
            </label>
            <label>Details<textarea name="details" rows="5" placeholder="Tell us what you need" /></label>
            <button type="submit">Submit Enquiry</button>
          </form>
        </div>
      </section>

      <footer>
        <strong>ALEPH SPORTS - THE BEGINNING</strong>
        <div>
          <a href="https://www.alephsports.store" target="_blank" rel="noreferrer">Website</a>
          <a href="https://www.instagram.com/Aleph_Sports" target="_blank" rel="noreferrer">Instagram</a>
          <a href="#contact">Contact</a>
        </div>
        <span>© 2026 Aleph Sports. All rights reserved.</span>
      </footer>
    </main>
  )
}
