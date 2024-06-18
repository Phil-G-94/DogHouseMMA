import styles from "./page.module.css";
import Header from "../components/Header.jsx";

export default function Page() {
    return (
        <>
            <Header />
            <main className={styles["flex_container_col"]}>

                <article>
                    <h1 className={styles["center_text"]}>The Club</h1>

                    <section className={styles.clearfix}>

                        <h2 className={styles["section-h2"]}>
                            Who We Are
                        </h2>

                        <div>
                            <p>
                                Lorem Ipsum
                            </p>
                        </div>
                    </section>
                    <section className={styles.right}>

                        <h2 className={styles["section-h2"]}>
                            What We Do
                        </h2>

                        <div>
                            <p>
                                Lorem Ipsum
                            </p>
                        </div>
                    </section>
                    <section className={styles.clearfix}>
                        <div>
                            <p>
                                The Other Side
                            </p>
                        </div>
                    </section>
                </article>
            </main>
        </>
    );
}
