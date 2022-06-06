import { IconArrowRightUp } from 'assets'
import styles from './styles.module.scss'

export const BannerHero = () => (
  <section className={styles.background}>
    <div className={styles.container}>
      <h1>Build Your Awesome Platform</h1>
      <p>
        Enver studio is a digital studio that offers several services such as
        UI/UX Design to developers, we will provide the best service for those
        of you who use our services.
      </p>

      <button type="button">
        Our Services <IconArrowRightUp />
      </button>
    </div>
  </section>
)
