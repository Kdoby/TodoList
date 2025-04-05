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

    const fetchTodayDate = async () => {
        const today = new Date();
        const formatted = today
            .toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })
            .replace(/\. /g, '-')
            .replace('.', '');

        document.getElementById("inputDate").value = formatted;
        setDate(formatted);
    }

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

    /*처음 화면 켰을때, 카테고리, 투두, 오늘 날짜 fetch*/
    useEffect(() => {
        fetchCategories();
        fetchTodos();
        fetchTodayDate();
    }, []);

    // 카테고리 추가
    const addCategory = async () => {
        try {
            console.log(userName, newCategory, newColor);

            // post /api/categories
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

    return(
    <div style={{
            width: '80%',
            margin: 'auto'
    }}>
        <h1>Todo List</h1>

        <div>
            UserName : <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </div>

        <div style={{
                    display:"grid",
                    gridTemplateColumns:"1fr 3fr",
                    gap:"20px",
                    marginTop: '30px'
        }}>

            <div style={{
                    border: 'solid 1px #999999',
                    borderRadius: '15px',
                    padding: "20px"
            }}>
                <h3 style={{
                        margin:'0px'
                }}>
                Category
                </h3>

                <hr />

                <TestCategoryList categories={categories} />

                <br /><br />

                <div style={{
                        marginBottom: '15px'
                }}>
                    add category: <input type="text"  onChange={(e) => setNewCategory(e.target.value)}/>
                </div>
                <div style={{
                        marginBottom: '15px'
                }}>
                    color: <input type="color" onChange={(e) => setNewColor(e.target.value)}></input>
                </div>

                <button onClick={addCategory}>add</button>
            </div>

            <div style={{
                    border: 'solid 1px #999999',
                    borderRadius: '15px',
                    padding: "20px",

                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr',
                    gap: '20px'
            }}>
                <div>
                    <h3 style={{
                            float: 'left',
                            margin:'0px'
                    }}>
                    Todo List
                    </h3>

                    <div style={{
                            float: 'right'
                    }}>
                        <button onClick={fetchTodayDate}
                                style={{
                                    height: '100%',
                                    margin: '0px',
                                    padding: '5px 20px'
                        }}>
                        Today
                        </button>
                    </div>
                </div>
                <div>
                    <input id="inputDate" type="date"
                           defaultValue={todayDate}
                           onChange = {(e) => setDate(e.target.value)}
                           style={{
                                width: '100%',
                                height: '100%',
                                textAlign: 'center'
                           }}
                    />
                </div>



                <div>
                    <hr />
                    <TestTodoList allTodos={allTodos} />
                </div>

                <div style={{
                        border: 'solid 1px #999999',
                        borderRadius: '15px',
                        padding: "20px"
                }}>
                    <h3 style={{
                            margin:'0px'
                    }}>
                    Add / Edit
                    </h3>

                    <br />

                    <div>
                        <div style={{
                                marginBottom: '15px'
                        }}>
                            Date : <input type="date" value={todayDate}/>
                        </div>
                        <div style={{
                                marginBottom: '15px'
                        }}>
                            Category : <TestCategoryListSelectBox categories={categories}
                                           onChange = {(e) => setCategoryIdToMakeNewTodo(e.target.value)}
                                       />
                        </div>
                        <div style={{
                                marginBottom: '15px'
                        }}>
                            Todo : <input type="text" onChange = {(e) => setNewTodo(e.target.value)}/>
                        </div>

                        <br />

                        <div>
                            <button onClick={addTodo}>add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}