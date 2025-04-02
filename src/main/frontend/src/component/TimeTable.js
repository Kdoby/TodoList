import styles from "./TimeTable.module.css";

export default function TimeTable() {
    return (
        <div className={styles.tableBlock}>
            <div className={styles.tableHeader}>
                <h2>Time-Table</h2>
                <p>2025.03.03 ~ 2025.06.23</p>
            </div>
            <hr />
            <table>
            <tr className={styles.tableInnerHeader}>
                <th></th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
                <th>Sun</th>
            </tr>
            <tr><th>9</th></tr>
            <tr><th>10</th></tr>
            <tr><th>11</th></tr>
            <tr><th>12</th></tr>
            <tr><th>1</th></tr>
            <tr><th>2</th></tr>
            <tr><th>3</th></tr>
            <tr><th>4</th></tr>
            <tr><th>5</th></tr>
            <tr><th>6</th></tr>
            <tr><th>7</th></tr>
            <tr><th>8</th></tr>
            <tr><th>9</th></tr>
            <tr><th>10</th></tr>
            <tr><th>11</th></tr>
            <tr><th>12</th></tr>
            </table>

        </div>
    );
}