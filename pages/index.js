import React from "react";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Hero from "../components/hero";
import Layout from "../components/layout";
import { useTranslation } from "next-i18next";

const Homepage = () => {
  const { t } = useTranslation("home-page");

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="42x42" href="/images/favicon-16x16.png"/>
        <title>{t("title")}</title>
      </Head>
      <Layout>
        <main>
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
