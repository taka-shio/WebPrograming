import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'
import './AboutPage.css'

const catchCopyLines = ['誠実に。', '伝えるために、', '表現する。']

const introParagraphs = [
  'たかほはこの考えを元に',
  '「誠実に。伝えるために、表現する。」をモットーとしています。',
]

const aboutBlocks = [
  {
    title: '「誠実に。」',
    paragraphs: [
      'まず影響が及ぶ範囲を考え、それらに対して誠実に向き合います。',
      '自分、関わる人、課題や問題、時間やお金などに対しても、誠実に向き合い、',
      'よりより方向に向かうように考え続けます。',
    ],
  },
  {
    title: '「伝えるために」',
    paragraphs: [
      'たかほは伝えるために作ります。',
      'どの手法なら伝わりやすいか、意図した伝わり方になるか、語弊が生じないか。',
      '独りよがりにならないように、伝えることにも誠実であります。',
    ],
  },
  {
    title: '「作る」',
    paragraphs: [
      '伝えるために、自分の考えを目に見えるようにするために、作ります。',
      'たかほが作るのは、デザインやサービスだけに留まらず、',
      '言葉、仕組み、環境などの目に見えないものも作ります。',
    ],
  },
]

function AboutPage() {
  return (
    <>
      <main className="about-page">
        <div className="about-page__inner">
          <section className="about-page__hero" aria-labelledby="about-page-title">
            <SectionTitle className="about-page__title" id="about-page-title">
              About me
            </SectionTitle>

            <div className="about-page__catch-copy" aria-hidden="true">
              {catchCopyLines.map((line) => (
                <p className="about-page__catch-line" key={line}>
                  <span>{line}</span>
                </p>
              ))}
            </div>
          </section>

          <div className="about-page__content">
            <section className="about-page__block about-page__block--intro" aria-labelledby="about-philosophy-title">
              <blockquote className="about-page__quote">
                <p className="about-page__quote-text">
                  「みんなが幸せになる設計は<span className="about-page__quote-mark">？</span>」
                </p>
              </blockquote>

              <div className="about-page__paragraph-group">
                {introParagraphs.map((paragraph) => (
                  <p className="about-page__text" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            {aboutBlocks.map((block, index) => (
              <section
                className="about-page__block"
                key={block.title}
                aria-labelledby={`about-block-title-${index}`}
              >
                <h2 className="about-page__block-title" id={`about-block-title-${index}`}>
                  {block.title}
                </h2>

                <div className="about-page__paragraph-group">
                  {block.paragraphs.map((paragraph) => (
                    <p className="about-page__text" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default AboutPage
