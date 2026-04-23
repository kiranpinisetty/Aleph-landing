import { scrollToSection } from '../utils/scrollToSection'

export default function Footer({ items }) {
  return (
    <footer className="footer-section">
      <div className="container footer-row">
        <div className="footer-brand">
          <strong>ALEPH SPORTS</strong>
          <span>THE BEGINNING</span>
        </div>
        <nav className="footer-links">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => {
                event.preventDefault()
                scrollToSection(item.href)
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <p>© 2026 Aleph Sports</p>
      </div>
    </footer>
  )
}
