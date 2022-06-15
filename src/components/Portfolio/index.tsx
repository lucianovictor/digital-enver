import { IconChevronLeft, IconChevronRight } from 'assets'
import { useState } from 'react'
import styles from './styles.module.scss'

const IMAGES = [
  '/portfolio/project-1.png',
  '/portfolio/project-2.png',
  '/portfolio/project-3.png'
]

export const Portfolio = () => {
  const [activeImage, setActiveImage] = useState(0)

  const handlePrev = () => {
    const isFirstImage = activeImage <= 0

    if (!isFirstImage) {
      setActiveImage(activeImage - 1)
    } else {
      setActiveImage(0)
    }
  }

  const handleNext = () => {
    const isLastImage = activeImage >= IMAGES.length - 1

    if (!isLastImage) {
      setActiveImage(activeImage + 1)
    } else {
      setActiveImage(IMAGES.length - 1)
    }
  }

  return (
    <section>
      <div className={styles.background}>
        <h1 className={styles.title}>Our Awesome Portofolio</h1>

        <div className={styles.projects}>
          {IMAGES.map((image, index) => (
            <img
              src={image}
              key={image}
              className={index === activeImage ? styles.active : ''}
            />
          ))}
        </div>

        <div className={styles.controller}>
          <button
            type="button"
            onClick={handlePrev}
            disabled={activeImage === 0}
          >
            <IconChevronLeft />
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={activeImage === IMAGES.length - 1}
          >
            <IconChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}
