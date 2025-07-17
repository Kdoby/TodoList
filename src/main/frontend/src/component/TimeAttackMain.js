import React from "react";
import { Link } from 'react-router-dom';

import "./TimeAttackMain.css";
export default function TimeAttackMain({userName, todayDate, allTodos}) {
    console.log(allTodos);
    return (
        <div style={{width: "40%", margin: "auto"}}>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px"}}>
                <div className="mode-div"><input type="checkbox" />NORMAL MODE</div>
                <div className="mode-div"><input type="checkbox" />HARD MODE</div>
            </div>

            <div style={{ height: "20px" }} />

            <div style={{ border:"1px solid black",
                          borderRadius: "20px",
                          height: "100px",
                          padding: "30px"
            }}>
                <div>todo: <span>
                                <select name="todoSelect">
                                    <option value="todo">-- not select --</option>
                                    {Array.isArray(allTodos?.data) &&
                                        allTodos.data.flatMap((category, catIdx) =>
                                          category.todos.map((todo, todoIdx) => (
                                            <option key={`${todo.id}`}>{category.categoryName} - {todo.title}</option>
                                          ))
                                        )}
                                </select>
                            </span>
                </div>
                <div>time: <span><input type="text" /></span></div>
            </div>

            <div style={{ height: "20px" }} />

            <button className = "attackBtn"
                 style={{ borderRadius: "20px",
                          border: "1px solid black",
                          padding: "20px 0px",
                          textAlign: "center",
                          width: "100%"
                 }}
            >ATTACK!</button>
        </div>
    );
}