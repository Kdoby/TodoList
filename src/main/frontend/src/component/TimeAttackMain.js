import React, {useEffect, useRef, useState} from "react";
import { Link } from 'react-router-dom';

import "./TimeAttackMain.css";
import axios from "axios";

function StudyTimeInput({onStart, userName, todayDate}) {
    const [allTodos, setAllTodos] = useState([]);
    const [mode, setMode] = useState("normal");
    const [todo, setTodo] = useState('');
    const [hour, setHour] = useState(1); // 기본 1시간
    const [minute, setMinute] = useState(0);
    const todoRef = useRef();

    const fetchTodoList = async () => {
        try {
            const response = await axios.post('/api/todos/list', {
                userId: userName,
                todoDate: todayDate
            });
            setAllTodos(response.data.data);
            console.log("투두 리스트 받아오기: ", response.data);
        } catch(e) {
            console.error("fail fetch: ", e);
        }
    };
    useEffect(() => {
        if(!userName || !todayDate) {
            return;
        }
        fetchTodoList();
    }, [userName, todayDate]);

    const handleSubmit = () => {
        const totalMinutes = hour * 60 + minute;
        if(!todo) {
            alert("todo를 선택해주세요");
            todoRef.current.focus();
            return;
        }
        if(totalMinutes <= 0) {
            alert("0분 이상으로 설정해주세요.");
            return;
        }
        onStart(totalMinutes, mode, todo); // 타이머 시작
    }

    return (
        <div style={{width: "40%", margin: "auto"}}>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px"}}>
                <div className="mode-div"><input type="radio" value="normal" checked={mode === "normal"} onChange={() => setMode("normal")}/>NORMAL MODE</div>
                <div className="mode-div"><input type="radio" value="hard" checked={mode === "hard"} onChange={() => setMode("hard")}/>HARD MODE</div>
            </div>

            <div style={{ height: "20px" }} />

            <div style={{ border:"1px solid black",
                borderRadius: "20px",
                height: "100px",
                padding: "30px"
            }}>
                <div>todo: <span>
                                <select name="todoSelect" ref={todoRef} value={todo} onChange={(e) => setTodo(e.target.value)} required>
                                    <option value="todo">-- not select --</option>
                                    {Array.isArray(allTodos) &&
                                        allTodos.flatMap((category, catIdx) =>
                                            category.todos.map((todo, todoIdx) => (
                                                <option key={todo.id} value={todo.id}>{category.categoryName} - {todo.title}</option>
                                            ))
                                        )}
                                </select>
                            </span>
                </div>
                <div>time: <span>
                    <input type="number" min="0" max="24" step="1" value={hour} onChange={(e) => setHour(Number(e.target.value))} />
                    <input type="number" min="0" max="59" step="1" value={minute} onChange={(e) => setMinute(Number(e.target.value))} />
                </span></div>
            </div>

            <div style={{ height: "20px" }} />

            <button className = "attackBtn"
                    style={{ borderRadius: "20px",
                        border: "1px solid black",
                        padding: "20px 0px",
                        textAlign: "center",
                        width: "100%"
                    }}
                    onClick={handleSubmit}
            >ATTACK!</button>
        </div>
    );
}

function StudyTimer ({targetTime, mode, todo, onReset}) {
    const [remainingSeconds, setRemainingSeconds] = useState(targetTime * 60);
    const [isPaused, setIsPaused] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        if(isPaused || isFinished) return;

        const timer = setInterval(() => {
           setRemainingSeconds((prev) => {
               if (prev <= 1) {
                   clearInterval(timer);
                   setIsFinished(true);
                   return 0;
               }
               return prev - 1;
           });
        }, 1000); // 1초마다 실행

        return () => clearInterval(timer);
    }, [isPaused, isFinished]);

    const hours = Math.floor(remainingSeconds / 3600);
    const minutes = Math.floor((remainingSeconds % 3600) / 60);
    const seconds = remainingSeconds % 60;

    if (isFinished) {
        return (
            <div>
                <h2>COMPLETE!</h2>
                <div>
                    <button>Continue</button>
                    <button>Done</button>
                </div>
            </div>
        );
    }

    return(
        <div>
            <h2>{mode === "normal" ? "Normal Mode" : "🔥Hard Mode🔥"}</h2>
            <h2>{String(hours).padStart(2, "0")} : {String(minutes).padStart(2, "0")} : {String(seconds).padStart(2, "0")}</h2>
            {mode === "normal" ? (
                <div>
                    <button onClick={() => setIsPaused(!isPaused)}>
                        {isPaused ? "RESTART" : "PAUSE"}
                    </button>
                    <button onClick={onReset} >
                        STOP
                    </button>
                </div>
            ) : (
                <p style={{color: "gray", marginTop: "10px"}}>하드모드는 일시정지/종료할 수 없습니다.</p>
            )}
        </div>
    );
}

export default function TimeAttackMain({userName, todayDate}) {
    const [targetTime, setTargetTime] = useState(null); // 분 단위
    const [selectedMode, setSelectedMode] = useState("normal");
    const [selectedTodo, setSelectedTodo] = useState('');

    const handleStart = (minutes, mode, todo) => {
        setSelectedTodo(todo);
        setSelectedMode(mode);
        setTargetTime(minutes);
    }

    const handleReset = () => {
        // 공부시간 저장
        setTargetTime(null);
    }

    return (
        <div>
            {targetTime === null ? (
                <StudyTimeInput userName={userName} todayDate={todayDate} onStart={handleStart}/>
            ) : (
                <StudyTimer targetTime={targetTime} mode={selectedMode} todo={selectedTodo} onReset={handleReset} />
            )}
        </div>
    );
}