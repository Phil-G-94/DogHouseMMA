import styles from "./page.module.css";

import Link from "next/link";

export default function NotFound() {
    return (
        <div className={styles["grid_container"]}>
            <h2>
                Page Not Found
            </h2>

            <p>
                The page you are looking for does not exist. Return <Link href="/">Home</Link>.
            </p>

            <svg className={styles["not-found-sprite"]}>
                <use href="/sprites/error.svg#not-found"></use>
            </svg>
        </div>
    );
};