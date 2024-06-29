"use client";

import styles from "./page.module.css";

import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className={styles["grid_container"]}>
            <h2>Something went wrong!</h2>

            <svg>
                <use href="/sprites/error.svg#app-error"></use>
            </svg>

            <button onClick={() => reset()}>Try again</button>
        </div>
    );

}