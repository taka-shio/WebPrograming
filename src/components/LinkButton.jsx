import './LinkButton.css'

function LinkButton({ href, children, className = '' }) {
  const classes = ['link-button', className].filter(Boolean).join(' ')

  return (
    <a className={classes} href={href}>
      <span className="link-button__label">{children}</span>
      <span className="link-button__arrow" aria-hidden="true">
        →
      </span>
    </a>
  )
}

export default LinkButton
