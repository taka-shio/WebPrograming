import LinkButton from '../components/LinkButton'
import SectionTitle from '../components/SectionTitle'
import './AboutSection.css'

const aboutParagraphs = [
  '私は皆さんの幸せを願っています。',
  'しかし、日常は目まぐるしく進み、自分だけの幸せを忘れてしまうこともあります。',
  'その幸せを忘れないために、私は考え続けます。',
]

const closingParagraphs = [
  'この考えを元に物事を解釈し、その独自の見解を表現し続けます。',
  'それが たかほ です。',
]

function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-section__inner">
        <SectionTitle className="about-section__title" id="about-title">
          About me
        </SectionTitle>

        <div className="about-section__content">
          <div className="about-section__group">
            {aboutParagraphs.map((paragraph) => (
              <p className="about-section__text" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <blockquote className="about-section__quote">
            <p className="about-section__quote-text">
              「みんなが幸せになる設計は<span className="about-section__quote-mark">？</span>」
            </p>
          </blockquote>

          <div className="about-section__group about-section__group--closing">
            {closingParagraphs.map((paragraph) => (
              <p className="about-section__text" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="about-section__action">
          <LinkButton href="/about">About me</LinkButton>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
