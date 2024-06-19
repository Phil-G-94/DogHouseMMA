import styles from "./page.module.css";
import Header from "./components/Header.jsx";

export default function Page() {
    return (
        <>
            <main className={styles["flex_container_col"]}>
                <Header />
                <h1>Dog House MMA</h1>
                <img src="/dhlogo.jpeg" className={styles.logo} />
                <footer>By Phil</footer>
            </main>
        </>
    );
}
