import Head from "next/head";
import styles from "../styles/Dashboard.module.scss";
import NavButton from "./components/NavButton/NavButton";

function Dashboard() {
  return (
    <div>
      <Head>
        <title>Line of Reasoning</title>
        <meta name="description" content="Visualize your perspective" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavButton />
      <main className={styles.main}>
        <h1 className={styles.title}>Projects</h1>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default Dashboard;
