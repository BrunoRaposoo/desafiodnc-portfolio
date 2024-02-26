/* eslint-disable react/prop-types */
import styles from './BlogCard.module.css'

export function BlogCard({title, date, category, description}) {
  return (
    <div className={styles.blogContent}>
      <span>{title}</span>
      <div className={styles.description}>
        <p>{date}</p>
        <p>{category}</p>
      </div>
      <p>{description}</p>
    </div>

  )
}