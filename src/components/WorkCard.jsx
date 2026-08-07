import styles from './WorkCard.module.css'

function WorkCard({ image, title, category }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageFrame}>
        <img className={styles.image} src={image.src} alt={image.alt} />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.category}>{category}</p>
      </div>
    </article>
  )
}

export default WorkCard
