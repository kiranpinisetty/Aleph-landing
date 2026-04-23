import { useEffect, useState } from 'react'
import { scrollToSection } from '../utils/scrollToSection'

export default function Nav({ items }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 80)
      const current = ['#home', ...items.map((item) => item.href)].findLast((id) => {
        const node = document.querySelector(id)
        return node && node.getBoundingClientRect().top <= 120
      })
      if (current) setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [items])

  const go = (href) => {
    setMenuOpen(false)
    scrollToSection(href)
  }

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <button className="brand-lockup" type="button" onClick={() => go('#home')} aria-label="Aleph Sports home">
        <span className="brand-mark">α</span>
        <span className="brand-copy">
          <span>ALEPH SPORTS</span>
          <small>THE BEGINNING</small>
        </span>
      </button>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span />
      </button>

      <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
        {items.map((item) => (
          <button
            className={active === item.href ? 'is-active' : ''}
            key={item.href}
            type="button"
            onClick={() => go(item.href)}
          >
            {item.label}
          </button>
        ))}
        <button className="nav-cta speed-line" type="button" onClick={() => go('#contact')}>Shop Now</button>
      </nav>
    </header>
  )
}
