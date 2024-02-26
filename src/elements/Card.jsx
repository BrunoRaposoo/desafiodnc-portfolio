/* eslint-disable react/prop-types */
import styles from './Card.module.css'

export function Card({title, site, description, img}) {
  return (
    <div className={styles.card}>
      <a href={site} target='_blank'>
        <img src={img} alt="ERROR"/>
      </a>
      <div className={styles.projectDescription}>
        <h1>{title}</h1>
        <p>{description}
        </p>
      </div>
    </div>
  )
}