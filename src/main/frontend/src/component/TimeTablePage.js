import TimeTable from "./TimeTable.js";
import SemesterList from "./SemesterList.js";

export default function TimeTablePage() {
    return (
        <div style={{display:"flex"}}>
            <SemesterList />
            <TimeTable />
        </div>
    );
}