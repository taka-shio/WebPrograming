import { Link } from 'react-router-dom'
import instagramIcon from '../assets/footer/instagram.svg'
import xIcon from '../assets/footer/x.svg'
import styles from './Footer.module.css'

const siteMapItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About me' },
  { to: '/works', label: 'Works' },
  { to: '/history', label: 'History' },
  { to: '/contact', label: 'Contact' },
]

const socialItems = [
  {
    href: 'https://www.instagram.com/_mae_taka?igsh=eHI4NjI3MGVncmVi&utm_source=qr',
    label: 'Instagram',
    icon: instagramIcon,
  },
  {
    href: 'https://x.com/taka_kmc?s=11',
    label: 'X',
    icon: xIcon,
  },
]

function FooterGroup({ title, children }) {
  return (
    <section className={styles.group}>
      <h2 className={styles.groupTitle}>{title}</h2>
      {children}
    </section>
  )
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <FooterGroup title="Site map">
          <nav aria-label="Footer site map">
            <ul className={styles.linkList}>
              {siteMapItems.map((item) => (
                <li key={item.to}>
                  <Link className={styles.siteLink} to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </FooterGroup>

        <FooterGroup title="SNS">
          <ul className={styles.socialList}>
            {socialItems.map((item) => (
              <li key={item.label}>
                <a
                  className={styles.socialLink}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className={styles.socialIcon} src={item.icon} alt="" aria-hidden="true" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </FooterGroup>
      </div>
    </footer>
  )
}

export default Footer
