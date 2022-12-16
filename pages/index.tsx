import Head from 'next/head';
import Launches from '../components/Launches';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Launches SpaceX</title>
        <meta name='description' content='Developed by Carlos Silva' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Launches SpaceX</h1>
        <Launches></Launches>
      </main>

      <footer className={styles.footer}>Developed by Carlos Silva</footer>
    </div>
  );
}
