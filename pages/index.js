import Head from 'next/head'
import Link from "next/link"
import styles from '../styles/Home.module.css'

import Hero from "../components/hero";
import {useRouter} from "next/router";

export default function Home(props) {
    const router = useRouter()
    const {locale, locales, defaultLocale} = router

    return (
        <div className={styles.container}>
            <Head>
                <title>Funcoldes</title>
                <Link href="/mision" locale="en">
                    <a>To another</a>
                </Link>
            </Head>

            <main className={styles.main}>
                <Hero/>
                <p>current locale: {locale}</p>
                <p>Default locale: {defaultLocale}</p>
                <p>Configured locales: {JSON.stringify(locales)}</p>
                <p>Somos una Organización sin ánimo de lucro, de nacionalidad Colombiana, constituida el 25 de Marzo de
                    2004,
                    en Bogotá.</p>
                <p>El objetivo y la trascendencia de la entidad ha sido en el acompañamiento de entidades Privadas,
                    Públicas y
                    Organismos Internacionales, en programas de capacitación, Informal, formación científica y
                    pedagógica dentro de
                    las necesidades de desarrollo de las entidades, comunidades, construyendo procesos que han permitido
                    procesos
                    investigativos en lo social, económico y político, permitiendo la generación de soluciones reales a
                    las
                    necesidades puntuales de la sociedad colombiana.</p>
                <p>La experiencia de la entidad es amplia en el campo privado y público. Siempre comprometido con las
                    necesidades
                    y aporte a la sociedad, generando desde su seno proyectos y procesos que han permitido beneficiar a
                    muchos
                    colombianos.fdsfd</p>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo}/>
                </a>
            </footer>
        </div>
    )
}
