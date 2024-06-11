import styles from "../page.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav className={styles["flex_container_row"]}>
                <ul className={styles["nav-list"]}>
                    <Link href="/">Home</Link>
                    <Link href="/the-club">The Club</Link>
                </ul>
            </nav>
        </header>
    );
}
