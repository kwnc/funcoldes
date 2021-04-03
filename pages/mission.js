import * as React from "react"
import Nav from "../components/nav"
import Head from "next/head"
import Layout from "../components/layout"
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
import {useTranslation} from "next-i18next"

export default function Mission() {
    const {t} = useTranslation('mission')

    return (
        <div>
            <Head>
                <title>Funcoldes | {t('mission')}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <Nav/>
            <Layout>
                <div id="hero" className="pt-24 bg-fixed bg-contain bg-auto bg-no-repeat md:py-50 sm:pb-50">
                    <h1>{t('mission')}</h1>
                    <p>{t('first-p')}</p>

                    <h1>{t('our-vision')}</h1>
                    <p>{t('second-p')}</p>

                    <h1>{t('reference')}</h1>
                    <p>{t('third-p')}</p>
                </div>
            </Layout>
        </div>
    )
}

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'mission', 'footer', 'nav']),
    },
})
