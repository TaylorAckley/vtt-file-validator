import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import VTTViewer from '../components/vtt-viewer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VTT File Validator</title>
        <meta name="description" content="Validate VTT Files" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          VTT File Validator
        </h1>

        <p className={styles.description}>
          Placeholder for what are VTT files
        </p>

        <div className={styles.grid}>
           
          <div className={styles.section}>
            <VTTViewer></VTTViewer>
          </div>
        </div> 
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created By Taylor Ackley
        </a>
      </footer>
    </div>
  )
}
