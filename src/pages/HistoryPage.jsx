import Footer from '../components/Footer'
import HistoryPreview from '../components/HistoryPreview'
import SectionTitle from '../components/SectionTitle'
import { historyProfileData } from '../data/historyData'
import './HistoryPage.css'

const historyLeadLines = [
  '過去のたかほのおかげで今があります。',
  '今はまだ未成熟ですが、コツコツと土壌を豊かにしているところです。',
  '過去と今の繋がりの中で未来のたかほが生まれます。',
]

function HistoryPage() {
  return (
    <>
      <main className="history-page">
        <div className="history-page__inner">
          <section className="history-page__hero" aria-labelledby="history-page-title">
            <SectionTitle className="history-page__title" id="history-page-title">
              History
            </SectionTitle>

            <div className="history-page__lead">
              {historyLeadLines.map((line) => (
                <p className="history-page__lead-text" key={line}>
                  {line}
                </p>
              ))}
            </div>
          </section>

          <section className="history-page__profile" aria-label="History profile">
            <HistoryPreview {...historyProfileData} />
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default HistoryPage
