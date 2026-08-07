import WorkCard from './WorkCard'
import styles from './WorksGrid.module.css'

function WorksGrid({ items, className = '' }) {
  const classes = [styles.grid, className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      {items.map((item) => (
        <WorkCard key={item.id ?? item.title} {...item} />
      ))}
    </div>
  )
}

export default WorksGrid
