import styles from "./timetable.module.css";

export default function Timetable() {
    return (
        <div className={styles["table_container"]}>
            <table style={{ border: "1px solid black" }}>
                <caption>Timetable</caption>
                <thead>
                    <tr>
                        <th></th>
                        <th scope="col">Monday</th>
                        <th scope="col">Tuesday</th>
                        <th scope="col">Wednesday</th>
                        <th scope="col">Thursday</th>
                        <th scope="col">Friday</th>
                        <th scope="col">Saturday</th>
                        <th scope="col">Sunday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">12pm - 2pm</th>
                    </tr>

                    <tr>
                        <th scope="row">2pm - 4pm</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">4pm - 6pm</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <th scope="row">6pm - 8pm</th>
                        <td></td>
                        <td style={{ backgroundColor: "purple", color: "white" }}>Live Rolls 🔥</td>
                        <td></td>
                        <td style={{ backgroundColor: "purple", color: "white" }}>Live Rolls 🔥</td>
                        <td style={{ backgroundColor: "purple", color: "white" }}>Live Rolls 🔥</td>
                        <td></td>
                        <td style={{ backgroundColor: "purple", color: "white" }}>Live Rolls 🔥</td>
                    </tr>
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    );
}
