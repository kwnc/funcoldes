import styles from "./layout.module.css";
import Footer from "./footer";
import Head from "next/head";
import Nav from "./nav";

export const siteTitle = "Funcoldes";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta
          name="description"
          content="Funcoldes - Fundacion Colombiana, ayuda a familias Colombianas"
        />
        <link rel="icon" type="image/png" href="../public/icon-48x48.png" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Nav />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}
