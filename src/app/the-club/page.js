import styles from "./page.module.css";
import Header from "../components/Header.jsx";
import Timetable from "../components/Timetable";

export default function Page() {
    return (
        <>
            <Header />
            <main className={styles["flex_container_col"]}>
                <article>
                    <div className={styles["grid_container"]}>
                        <section className={`${styles["grid_item_one"]} ${styles["margin_top_sm"]}`}>
                            <h2 className={styles["center_text"]}>Who We Are</h2>

                            <div className={styles["padding_sm"]}>
                                <p>
                                    Competitors and hobbyists with a passion for grappling and mixed martial arts.
                                    Most of us train across various South London gyms and come together at Dog House MMA to exchange techniques, spar and prepare for competition.
                                </p>
                            </div>
                        </section>
                        <section className={styles["grid_item_two"]}>
                            <h2 className={styles["center_text"]}>When We Train</h2>

                            <div className={`${styles["padding_sm"]}`}>
                                <Timetable />
                            </div>
                        </section>

                        <section className={styles["grid_item_three"]}>
                            <h2 className={styles["center_text"]}>Why We Do It</h2>

                            <div className={styles["padding_sm"]}>
                                <p>
                                    Excepteur officia nulla nulla ex ea ad. Dolore pariatur tempor ea
                                    cupidatat labore consectetur. Id ut ipsum occaecat laborum laboris
                                    elit mollit quis tempor duis. Tempor voluptate sint eu do proident
                                    magna eiusmod laboris nostrud sunt ullamco do. Cillum esse fugiat
                                    commodo sunt cupidatat anim aliqua ea do cupidatat aute laboris non
                                    duis.Voluptate veniam tempor eiusmod occaecat amet aute eiusmod et
                                    velit est eu adipisicing. Labore laboris ipsum ullamco nostrud.
                                    Occaecat aliqua non tempor ea cupidatat laborum ea. Do sint irure
                                    culpa et Lorem anim. Quis tempor consequat commodo sit in voluptate
                                    non elit aliqua. Nostrud labore ad ullamco cupidatat ut adipisicing
                                    labore cillum id minim. Nisi mollit cupidatat consequat duis ea.Ea
                                    id non reprehenderit aliquip et voluptate commodo id cillum aute
                                    ullamco id. Elit enim consectetur id sunt deserunt. Veniam aliqua
                                    deserunt ipsum ad. Sunt labore velit pariatur irure. Nisi
                                    adipisicing magna aliqua reprehenderit quis voluptate.
                                </p>
                            </div>
                        </section>
                    </div>

                </article>
            </main >
        </>
    );
}
