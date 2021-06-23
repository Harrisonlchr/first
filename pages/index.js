import Head from "next/head";
import styles from "../styles/Home.module.css";
import Logo from "../components/logo";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Firts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logoDos.png" />
      </Head>

      <main className={styles.main}>
        <Logo />
        <h1 className={styles.title}>
          H Developments<a href="https://nextjs.org">FIRTS</a>
        </h1>
      </main>
    </div>
  );
}
