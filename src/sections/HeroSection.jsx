import './HeroSection.css'

const copyLines = ['誠実に。', '伝えるために、', '表現する。']

function HeroSection() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-section__inner">
        <div className="hero-section__name-block">
          <p className="hero-section__name-en">Maekawa Takaho</p>
          <h1 className="hero-section__name-ja" id="hero-title">
            前川 天秀
          </h1>
        </div>

        <div className="hero-section__copy" aria-hidden="true">
          {copyLines.map((line) => (
            <p className="hero-section__copy-line" key={line}>
              <span>{line}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
