import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>homepage</h1>
        <div className={styles.text}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            voluptatem exercitationem error deserunt sit totam mollitia
            temporibus fugiat, earum maiores odit quae autem, aut iste!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            voluptatem exercitationem error deserunt sit totam mollitia
            temporibus fugiat, earum maiores odit quae autem, aut iste!
          </p>
        </div>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
