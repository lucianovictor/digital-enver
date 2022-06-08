import Head from 'next/head'
import { Header } from 'components/Header'
import { BannerHero } from 'components/BannerHero'
import { Presentation } from 'components/Presentation'
import { Services } from 'components/Services'
import { Portfolio } from 'components/Portfolio'

import styles from 'styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Digital Agency Enver</title>
      </Head>
      <Header />
      <BannerHero />
      <Presentation />
      <Services />
      <Portfolio />
    </div>
  )
}
