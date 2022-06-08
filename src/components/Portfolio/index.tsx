import styles from './styles.module.scss'

export const Portfolio = () => (
  <section>
    <div>
      <h1 className={styles.title}>Our Awesome Portofolio</h1>
      <div className={styles.projects}>
        <img src="/portfolio/project-1.png" alt="" />
        <img src="/portfolio/project-2.png" alt="" />
        <img src="/portfolio/project-3.png" alt="" />
      </div>
    </div>
  </section>
)
