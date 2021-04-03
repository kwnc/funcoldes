import Head from "next/head";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import styles from '../styles/Home.module.css'
import Hero from "../components/hero";
import Nav from "../components/nav";
import Footer from "../components/footer";
import {useTranslation} from "next-i18next";

const Homepage = () => {
    const {t} = useTranslation('home-page')

    return (
        <div>
            <Head>
                <title>Funcoldes | Home</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <Nav/>
            <main className={styles.main}>
                <Hero/>
                <p>{t("we-are")}</p>
                <p>El objetivo y la trascendencia de la entidad ha sido en el acompañamiento de entidades Privadas,
                    Públicas y
                    Organismos Internacionales, en programas de capacitación, Informal, formación científica y
                    pedagógica dentro de
                    las necesidades de desarrollo de las entidades, comunidades, construyendo procesos que han
                    permitido
                    procesos
                    investigativos en lo social, económico y político, permitiendo la generación de soluciones
                    reales a
                    las
                    necesidades puntuales de la sociedad colombiana.</p>
                <p>La experiencia de la entidad es amplia en el campo privado y público. Siempre comprometido con
                    las
                    necesidades
                    y aporte a la sociedad, generando desde su seno proyectos y procesos que han permitido
                    beneficiar a
                    muchos
                    colombianos.fdsfd</p>
            </main>

            <Footer/>
        </div>
    )
}

export const getStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(locale, ['common', 'home-page', 'footer']),
    },
})

export default Homepage
