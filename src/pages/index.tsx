import { Header } from 'components/Header'
import { BannerHero } from 'components/BannerHero'
import Head from 'next/head'

import styles from 'styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Digital Agency Enver</title>
      </Head>
      <Header />
      <BannerHero />
    </div>
  )
}
