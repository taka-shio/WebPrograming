import { Link } from 'react-router-dom'
import './Header.css'

const navItems = [
  { to: '/about', label: 'About me' },
  { to: '/works', label: 'Works' },
  { to: '/history', label: 'History' },
  { to: '/contact', label: 'contact' },
]

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-header__brand" to="/" aria-label="Home">
          Takaho Maekawa
        </Link>

        <nav className="site-header__nav" aria-label="Primary">
          <ul className="site-header__list">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link className="site-header__link" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
