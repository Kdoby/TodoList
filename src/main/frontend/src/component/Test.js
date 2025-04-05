import TestCategoryList from './TestCategoryList';
import TestTodoList from './TestTodoList';
import TestCategoryListSelectBox from './TestCategoryListSelectBox';


import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function Test(){
    const [newCategory, setNewCategory] = useState('');
    const [userName, setUserName] = useState('');
    const [categories, setCategories] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [categoryIdToMakeNewTodo, setCategoryIdToMakeNewTodo] = useState('');
    const [allTodos, setAllTodos] = useState([]);
    const [todayDate, setDate] = useState('');
    const [newColor, setNewColor] = useState('');


    const fetchCategories = async () => {
        try {
            const response = await axios.get('/api/categories/' + userName, {
                params: { is_active: true }
            });
            setCategories(response.data);
        } catch (e) {
            console.error("fail fetch: ", e);
        }
    };

    const fetchTodos = async () => {
        console.log("today: " + todayDate)
        try {
            const response = await axios.post('/api/todos/list', {
                userId: userName,
                todoDate: todayDate
            });
            setAllTodos(response.data);
        } catch (e) {
            console.error("fail fetch: ", e);
        }
    };

    useEffect(() => {
        console.log("📦:", allTodos);
    }, [allTodos]);

     /*유저 이름 바뀔때 마다 바꾸기*/
    useEffect(() => {
        if (userName) {
            fetchCategories();
            fetchTodos();
        }
    }, [userName]);

     /*날짜가 바뀔때 마다 바꾸기*/
    useEffect(() => {
        if (userName) {
            fetchTodos();
        }
    }, [todayDate]);

    /* 처음 화면 켰을때 */
    useEffect(() => {
        fetchCategories();
        fetchTodos();

        const today = new Date();
        const formatted = today
            .toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })
            .replace(/\. /g, '-')
            .replace('.', '');
        setDate(formatted);
    }, []);

    const addCategory = async () => {
        try {
            console.log(userName, newCategory, newColor);

            const response = await axios.post('/api/categories', {
                userId: userName,
                name: newCategory,
                color: newColor,
                isActive: true
            });

            if(response.data.success){
                alert(response.data.message);
                fetchCategories();
            }else {
                alert("response error");
            }
        } catch (error) {
            alert(error);
        }
    };

    const addTodo = async () => {
        try {
            console.log(userName, categoryIdToMakeNewTodo, newTodo, todayDate);

            const response = await axios.post('/api/todos', {
                userId: userName,
                categoryId: Number(categoryIdToMakeNewTodo),
                title: newTodo,
                todoDate: todayDate
            });


            if(response.data.success){
                alert(response.data.message);
                fetchTodos();
            }else {
                alert("response error");
            }
        } catch (error) {
            alert(error.message);
        }
        };

    // today 버튼 누르면
    const dateIsToday = async () => {
        const today = new Date();
        const formatted = today
        .toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })
        .replace(/\. /g, '-')
        .replace('.', '');

        // input의 값을 오늘 날짜로 바꾸기
        document.getElementById("inputDate").value = formatted;

        // setDate
        setDate(formatted);
    }

    return(
    <div>
        <h1>Todo List</h1>

        <div>
            UserName : <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </div>

        <div>
            date: <input id="inputDate" type="date" defaultValue={todayDate} onChange = {(e) => setDate(e.target.value)}/> <button onClick={dateIsToday}>Today</button>
        </div>

        <div style={{
                    display:"grid",
                    gridTemplateColumns:"1fr 1fr 1fr",
                    gap:"20px"
        }}>
            <div>
                <h3>Category</h3>
                <TestCategoryList categories={categories} />

                <br />

                <div>
                    add category: <input type="text"  onChange={(e) => setNewCategory(e.target.value)}/>
                    color: <input type="color" value="#FFFFFF" onChange={(e) => setNewColor(e.target.value)}></input>
                    <button onClick={addCategory}>add</button>
                </div>
            </div>

            <div>
                <h3>View TodoList</h3>
                <TestTodoList allTodos={allTodos} />
            </div>

            <div>
                <h3>add TodoList</h3>

                <br />

                <div>
                    <div>
                        select category:
                        <TestCategoryListSelectBox categories={categories}
                            onChange = {(e) => setCategoryIdToMakeNewTodo(e.target.value)}
                        />
                    </div>
                    <div>
                        add todo: <input type="text" onChange = {(e) => setNewTodo(e.target.value)}/>
                        <button onClick={addTodo}>add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}