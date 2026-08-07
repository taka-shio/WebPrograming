import HistoryPreview from '../components/HistoryPreview'
import LinkButton from '../components/LinkButton'
import SectionTitle from '../components/SectionTitle'
import { historyProfileData } from '../data/historyData'
import styles from './HistorySection.module.css'

function HistorySection() {
  return (
    <section className={styles.section} id="history" aria-labelledby="history-title">
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionTitle className={styles.title} id="history-title">
            History
          </SectionTitle>
        </div>

        <div className={styles.content}>
          <HistoryPreview {...historyProfileData} />
        </div>

        <div className={styles.action}>
          <LinkButton href="/history">History</LinkButton>
        </div>
      </div>
    </section>
  )
}

export default HistorySection
