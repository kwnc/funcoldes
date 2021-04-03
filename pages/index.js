import Head from "next/head";
import Link from "next/link"

import styles from '../styles/Home.module.css'
import Hero from "../components/hero";
import {useRouter} from "next/router";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Home(props) {
    const router = useRouter()
    const {locale, locales, defaultLocale} = router

    return (
        <div>
            <Head>
                <title>Funcoldes | Home</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <Nav/>
            <main className={styles.main}>
                <Hero/>
                <div className="center-container">
                    <div>
                        <Link href="/" locale="en">
                            <a>Cambiar a ingles</a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/" locale="es">
                            <a>Change to spanish</a>
                        </Link>
                    </div>
                </div>
                <p>Somos una Organización sin ánimo de lucro, de nacionalidad Colombiana, constituida el 25 de Marzo
                    de
                    2004,
                    en Bogotá.</p>
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
