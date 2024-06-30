export default function Timetable() {
    return (
        <div>
            <table style={{ display: "grid", minWidth: "100%" }}>
                <caption>Timetable</caption>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ columnSpan: "1" }}>
                        <td>12pm</td>
                    </tr>
                    <tr style={{ columnSpan: "1" }}>
                        <td>1pm</td>
                    </tr>
                    <tr style={{ columnSpan: "1" }}>
                        <td>2pm</td>
                    </tr>
                    <tr style={{ columnSpan: "1" }}>
                        <td>3pm</td>
                    </tr>
                    <tr style={{ columnSpan: "1" }}>
                        <td>4pm</td>
                    </tr>
                    <tr style={{ columnSpan: "1" }}>
                        <td>5pm</td>
                    </tr>
                    <tr style={{ columnSpan: "1" }}>
                        <td>6pm</td>
                    </tr>
                    <tr style={{ columnSpan: "1" }}>
                        <td>7pm</td>
                    </tr>
                    <tr style={{ columnSpan: "1" }}>
                        <td>8pm</td>
                    </tr>
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    );
}
