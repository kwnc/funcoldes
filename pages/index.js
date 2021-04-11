import React from "react";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import styles from "../styles/Home.module.css";
import Hero from "../components/hero";
import Layout from "../components/layout";
import { useTranslation } from "next-i18next";

const Homepage = () => {
  const { t } = useTranslation("home-page");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <Layout>
        <main className={styles.main}>
          <Hero />
          <p>{t("we-are")}</p>
          <p>{t("objective")}</p>
          <p>{t("experience")}</p>
        </main>
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "common",
      "home-page",
      "footer",
      "nav",
    ])),
  },
});

export default Homepage;
