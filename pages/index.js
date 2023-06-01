import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import StockChart from '../components/StockChart'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CandleStick Chart</title>
        <meta name="description" content="CandleStick Chart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <StockChart />
      </main>


    </div>
  )
}
