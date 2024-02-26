import styles from './Navbar.module.css'

export function NavbarMenu() {
  return (
    <div className={styles.navbar}>
        <ul>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
    </div>
  )
}