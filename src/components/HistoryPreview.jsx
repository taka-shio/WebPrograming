import styles from './HistoryPreview.module.css'

function HistoryPreview({ image, summaryItems, detailParagraphs }) {
  return (
    <div className={styles.preview}>
      <div className={styles.photoFrame}>
        <img className={styles.photo} src={image.src} alt={image.alt} />
      </div>

      <div className={styles.content}>
        <section className={styles.summarySection} aria-label="Profile summary">
          <dl className={styles.summary}>
          {summaryItems.map((item) => (
            <div className={styles.summaryRow} key={`${item.label}-${item.value}`}>
              <dt className={styles.summaryLabel}>{item.label}</dt>
              <dd className={styles.summaryValue}>{item.value}</dd>
            </div>
          ))}
          </dl>
        </section>

        <section className={styles.detail} aria-label="Profile detail">
          {detailParagraphs.map((paragraph) => (
            <p className={styles.detailText} key={paragraph}>
              {paragraph}
            </p>
          ))}
        </section>
      </div>
    </div>
  )
}

export default HistoryPreview
