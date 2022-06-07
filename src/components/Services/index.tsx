import services from './data'

import styles from './styles.module.scss'

export const Services = () => (
  <section style={{ marginTop: '150px' }}>
    <div className={styles.container}>
      <h1>The Service We Provide For You</h1>

      <div className={styles.services}>
        {services.map(service => (
          <div
            key={service.name}
            className={styles.service}
            data-color={service.color}
          >
            <span>{service.icon}</span>
            <strong>{service.name}</strong>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)
