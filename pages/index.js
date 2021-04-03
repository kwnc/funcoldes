import Head from "next/head";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import styles from '../styles/Home.module.css'
import Hero from "../components/hero";
import Nav from "../components/nav";
import Footer from "../components/footer";
import {useTranslation} from "next-i18next";
import Layout from "../components/layout";

const Homepage = () => {
    const {t} = useTranslation('home-page')

    return (
        <Layout>
            <Head>
                <title>Funcoldes | Home</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <Nav/>
            <main className={styles.main}>
                <Hero/>
                <p>{t("we-are")}</p>
                <p>{t('objective')}</p>
                <p>{t('experience')}</p>
            </main>
            <Footer/>
        </Layout>
    )
}

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'home-page', 'footer', 'nav']),
    },
})

export default Homepage
