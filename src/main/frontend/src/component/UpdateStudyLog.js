import {useEffect, useRef, useState} from "react";
import axios from "axios";

export default function UpdateStudyLog ({userId, selectedDate, log, onUpdate, isOpen, onClose}) {
    const [todoList, setTodoList] = useState([]);
    const [todo, setTodo] = useState(log.todoTitle);
    const [startTime, setStartTime] = useState(log.startTime);
    const [endTime, setEndTime] = useState(log.endTime);
    const todoRef = useRef();
    const startRef = useRef();
    const endRef = useRef();

    const fetchTodoList = async () => {
        try {
            const response = await axios.post('/api/todos/list', {
                userId: userId,
                todoDate: selectedDate.toISOString().slice(0,10)
            });
            setTodoList(response.data.data);
            console.log("투두 리스트 받아오기: ", response.data);
        } catch(e) {
            console.error("fail fetch: ", e);
        }
    };
    useEffect(() => {
        if(!userId || !selectedDate) {
            return;
        }
        fetchTodoList();
    }, [userId, selectedDate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`/api/todo/log/${log.id}`, {
                userId: userId,
                logDate: selectedDate,
                start: startTime,
                end: endTime
            });
            if(res.data.success) {
                alert(res.data.message);
                onUpdate();
            }
            else {
                console.log("루틴 수정 실패: ", res.data.message);
            }
        } catch (err) {
            alert("루틴 수정 에러: ", err);
        }
    };

    return (
        <div style={{display:isOpen?"block": "none",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.35)"}}>
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "677px",
                height: "498px",
                backgroundColor: "white",
                borderRadius: "20px",
                border: "solid 1px"
            }}>
                <div style={{padding: "30px"}}>
                    <img style={{ border: "none",
                        cursor: "pointer",
                        width:"40px",
                        marginLeft: "580px"
                    }} src={"./close.png"} alt={"closeModal"} onClick={onClose}></img>

                    <form className={"AS_form"}>
                        <div>
                            <h2>공부 기록 수정</h2>
                        </div>
                        <div>
                            <span className={"AS_inputLabel"}>TODO &nbsp;&nbsp;| &nbsp;&nbsp;</span>
                            <select ref={todoRef} value={todo} onChange={(e) => setTodo(e.target.value)} required>
                                <option value="">기록할 todo를 선택해주세요</option>
                                {todoList.map((t) => (
                                    <option key={t.id} value={t}>
                                        {t.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="start-time" className={"AS_inputLabel"}>시작시간 &nbsp;&nbsp;| &nbsp;&nbsp;</label>
                            <input type="time" ref={startRef} value={startTime} onChange={(e) => setStartTime(e.target.value)} id="start-time" name="start-time" required/>

                        </div>

                        <div>
                            <label htmlFor="end-time" className={"AS_inputLabel"}>종료시간 &nbsp;&nbsp;| &nbsp;&nbsp;</label>
                            <input type="time" ref={endRef} value={endTime} onChange={(e) => setEndTime(e.target.value)} id="end-time" name="end-time" required/>
                        </div>
                        <button className={"AS_submit"} onClick={handleSubmit}>추가</button>
                    </form>

                </div>

            </div>
        </div>
    );
}