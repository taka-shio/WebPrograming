import LinkButton from '../components/LinkButton'
import SectionTitle from '../components/SectionTitle'
import WorksGrid from '../components/WorksGrid'
import { homeWorksItems } from '../data/worksData'
import styles from './WorksSection.module.css'

function WorksSection() {
  return (
    <section className={styles.section} id="works" aria-labelledby="works-title">
      <div className={styles.inner}>
        <div className={styles.header}>
          <SectionTitle className={styles.title} id="works-title">
            Works
          </SectionTitle>
        </div>

        <div className={styles.content}>
          <WorksGrid items={homeWorksItems} />
        </div>

        <div className={styles.action}>
          <LinkButton href="/works">Works</LinkButton>
        </div>
      </div>
    </section>
  )
}

export default WorksSection
