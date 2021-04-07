import * as React from "react"
import Nav from "../components/nav";
import Head from "next/head";
import Layout from "../components/layout";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

export default function Impact() {
    const {t} = useTranslation('impact')

    return (
        <div>
            <Head>
                <title>{t('title')}</title>
            </Head>
            <Nav/>
            <Layout>
                <div id="hero" className="pt-24 bg-fixed bg-contain bg-auto bg-no-repeat md:py-50 sm:pb-50">
                    <h2 className="text-5xl py-6">{t('h1')}</h2>
                    <ul className="list-disc">
                        <li>{t('b1')}</li>
                        <li>{t('b2')}</li>
                        <li>{t('b3')}</li>
                        <li>{t('b4')}</li>
                        <li>{t('b5')}</li>
                        <li>{t('b6')}</li>
                        <li>{t('b7')}</li>
                        <li>{t('b8')}</li>
                        <li>{t('b9')}</li>
                        <li>{t('b10')}</li>
                        <li>{t('b12')}</li>
                    </ul>
                </div>
            </Layout>
        </div>
    )
}

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'impact', 'footer', 'nav']),
    },
})
