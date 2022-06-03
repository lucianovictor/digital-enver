import styles from './styles.module.scss'

export const Header = () => (
  <header>
    <div className={styles.container}>
      <img src="/logo.svg" alt="Logo Enver" />
      <nav>
        <ul className={styles.navigation}>
          <li className={styles.active}>Home</li>
          <li>Services</li>
          <li>Our Project</li>
          <li>About us</li>
        </ul>
      </nav>

      <button type="button">Contact us</button>
    </div>
  </header>
)
