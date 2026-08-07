import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'
import WorksGrid from '../components/WorksGrid'
import { worksPageItems } from '../data/worksData'
import './WorksPage.css'

const worksLeadLines = [
  'たかほが作るのは目に見えるモノだけではありません。',
  '言葉や文化などの目に見えないモノも作ります。',
  '全ては幸せを設計するために。',
]

function WorksPage() {
  return (
    <>
      <main className="works-page">
        <div className="works-page__inner">
          <section className="works-page__hero" aria-labelledby="works-page-title">
            <SectionTitle className="works-page__title" id="works-page-title">
              Works
            </SectionTitle>

            <div className="works-page__lead">
              {worksLeadLines.map((line) => (
                <p className="works-page__lead-text" key={line}>
                  {line}
                </p>
              ))}
            </div>
          </section>

          <section className="works-page__grid-section" aria-label="Works list">
            <WorksGrid className="works-page__grid" items={worksPageItems} />
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default WorksPage
