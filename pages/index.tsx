import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Codemover</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Codemover</h1>
        <p className={styles.description}>
          Kubernetes, JavaScript, TypeScript, .NET, Python, etc...
        </p>
        <p>
          <a href="mailto: hello@codemover.com">hello@codemover.com</a>
        </p>
      </main>
    </div>
  );
}
