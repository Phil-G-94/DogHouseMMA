import styles from "./page.module.css";

export default function Page() {
    return (
        <>
            <main className={styles["flex_container_col"]}>
                <header>
                    <nav
                        className={
                            styles["flex_container_row"]
                        }
                    >
                        <ul className={styles["nav-list"]}>
                            <li>
                                <a href="/">The Club</a>
                            </li>
                            <li>
                                <a href="/">The Shop</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <img
                    src="/dhlogo.svg"
                    className={styles.logo}
                />

                <h1>Hello, Next.js!</h1>

                <footer>By Phil</footer>
            </main>
        </>
    );
}
