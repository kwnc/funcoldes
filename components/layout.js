import styles from './layout.module.css'
import Footer from "./footer";

export default function Layout({children}) {
    return (
        <div>
            <div className={styles.container}>{children}</div>
            <Footer/>
        </div>
    )
}
