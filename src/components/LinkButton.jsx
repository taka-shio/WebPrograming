import { Link } from 'react-router-dom'
import './LinkButton.css'

function LinkButton({ href, children, className = '' }) {
  const classes = ['link-button', className].filter(Boolean).join(' ')
  const isExternalLink =
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('#')

  if (isExternalLink) {
    return (
      <a className={classes} href={href}>
        <span className="link-button__label">{children}</span>
        <span className="link-button__arrow" aria-hidden="true">
          →
        </span>
      </a>
    )
  }

  return (
    <Link className={classes} to={href}>
      <span className="link-button__label">{children}</span>
      <span className="link-button__arrow" aria-hidden="true">
        →
      </span>
    </Link>
  )
}

export default LinkButton
