import styles from './styles.module.scss'

export const Footer = () => (
  <footer>
    <div className={styles.container}>
      <img src="/logo.svg" alt="Logo Enver" />
      <ul className={styles.links}>
        <li>
          {' '}
          <a href="/"></a> Support
        </li>
        <li>
          {' '}
          <a href="/"></a> Privacy Policy
        </li>
        <li>
          {' '}
          <a href="/"></a> Terms and Conditions
        </li>
      </ul>
      <h6>© 2020 Enver, All Rights Reserved</h6>
    </div>
  </footer>
)
