import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'
import instagramBlueIcon from '../assets/contact/instagram-blue.svg'
import xBlueIcon from '../assets/contact/x-blue.svg'
import './ContactPage.css'

const socialLinks = [
  {
    id: 'instagram',
    href: 'https://www.instagram.com/_mae_taka?igsh=eHI4NjI3MGVncmVi&utm_source=qr',
    label: 'Instagram',
    icon: instagramBlueIcon,
  },
  {
    id: 'x',
    href: 'https://x.com/taka_kmc?s=11',
    label: 'X',
    icon: xBlueIcon,
  },
]

function ContactPage() {
  return (
    <>
      <main className="contact-page">
        <div className="contact-page__inner">
          <section className="contact-page__hero" aria-labelledby="contact-page-title">
            <SectionTitle className="contact-page__title" id="contact-page-title">
              Contact
            </SectionTitle>

            <div className="contact-page__content">
              <p className="contact-page__message">
                下記のSNSよりご連絡お待ちしております
              </p>

              <ul className="contact-page__social-list" aria-label="Contact social links">
                {socialLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      className="contact-page__social-link"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="contact-page__social-icon"
                        src={item.icon}
                        alt=""
                        aria-hidden="true"
                      />
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default ContactPage
