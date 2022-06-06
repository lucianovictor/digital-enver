import { IconPlay } from 'assets'
import styles from './styles.module.scss'

export const Presentation = () => (
  <section className={styles.container}>
    <div>
      <div className={styles.text}>
        <h1>Why Enver Is The Best Choice?</h1>
        <p>
          Watch this one minute video so you understand why you should use our
          services!
        </p>
      </div>
      <div className={styles.video}>
        <button type="button">
          <IconPlay />
        </button>
      </div>
    </div>
  </section>
)
