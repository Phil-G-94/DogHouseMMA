import styles from "./page.module.css";
import Header from "../components/Header.jsx";

export default function Page() {
    return (
        <>
            <Header />
            <main className={styles["flex_container_col"]}>
                <article>
                    <h1 className={styles["center_text"]}>The Club</h1>

                    <div className={styles["grid_container"]}>
                        <section className={styles["grid_item_one"]}>
                            <h2>Who We Are</h2>

                            <div>
                                <p>
                                    Pariatur qui deserunt elit quis deserunt ex aute irure. Duis
                                    ipsum voluptate excepteur aliquip officia laborum aute aliquip
                                    adipisicing tempor exercitation. Velit ipsum sunt labore irure
                                    amet id ex. Aliqua proident veniam tempor dolor proident
                                    cupidatat sit esse fugiat. Amet dolore cupidatat sunt est duis
                                    Lorem voluptate ea dolor exercitation qui fugiat.
                                </p>
                            </div>
                        </section>
                        <section className={styles["grid_item_two"]}>
                            <h2>What We Do</h2>

                            <div>
                                <p>
                                    Pariatur qui deserunt elit quis deserunt ex aute irure. Duis
                                    ipsum voluptate excepteur aliquip officia laborum aute aliquip
                                    adipisicing tempor exercitation. Velit ipsum sunt labore irure
                                    amet id ex. Aliqua proident veniam tempor dolor proident
                                    cupidatat sit esse fugiat. Amet dolore cupidatat sunt est duis
                                    Lorem voluptate ea dolor exercitation qui fugiat. Aute aute
                                    veniam veniam occaecat. Pariatur magna Lorem tempor dolore aute
                                    qui exercitation sint duis enim dolore non anim. Minim dolor
                                    occaecat amet esse quis magna veniam ad elit officia sint
                                    consectetur est proident. Non nisi eiusmod Lorem officia sint ea
                                    aute aliqua ea cillum duis elit culpa eu. Incididunt officia sit
                                    consectetur ex elit commodo ea culpa ex aute exercitation do
                                    nostrud qui.
                                </p>
                            </div>
                        </section>

                        <section className={styles["grid_item_three"]}>
                            <h2>Why We Do It</h2>

                            <div>
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
            </main>
        </>
    );
}
