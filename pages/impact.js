import * as React from "react"
import Nav from "../components/nav";
import Head from "next/head";
import Layout from "../components/layout";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

export default function Impact() {
    const {t} = useTranslation('impact')

    return (
        <Layout>
            <Head>
                <title>Funcoldes | Impact</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <Nav/>
            <div id="hero" className="pt-24 bg-fixed bg-contain bg-auto bg-no-repeat md:py-50 sm:pb-50">
                <h1>{t('h1')}</h1>
                <p>{t('p')}</p>
            </div>
        </Layout>
    )
}

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'impact', 'footer', 'nav']),
    },
})
