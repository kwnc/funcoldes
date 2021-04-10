import * as React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Mission() {
  const { t } = useTranslation("mission");

  return (
    <div>
      <Head>
        <title>Funcoldes | {t("mission")}</title>
      </Head>
      <Layout>
        <div
          id="hero"
          className="pt-24 bg-fixed bg-contain bg-auto bg-no-repeat md:py-50 sm:pb-50"
        >
          <h2 className="text-5xl py-6">{t("mission")}</h2>
          <p>{t("first-p")}</p>

          <h2 className="text-5xl py-6">{t("our-vision")}</h2>
          <p>{t("second-p")}</p>

          <h2 className="text-5xl py-6">{t("reference")}</h2>
          <p>{t("third-p")}</p>
        </div>
      </Layout>
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "common",
      "mission",
      "footer",
      "nav",
    ])),
  },
});
