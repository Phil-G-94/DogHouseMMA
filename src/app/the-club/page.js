import Link from "next/link";
import styles from "../page.module.css";
import Header from "../components/Header.jsx";

export default function Page() {
    return (
        <>
            <main className={styles["flex_container_col"]}>
                <Header />
                <h1>About The Club</h1>
            </main>
        </>
    );
}
