import TestCategoryList from './TestCategoryList';

import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function Test(){
    const [newCategory, setNewCategory] = useState('');
    const [userName, setUserName] = useState('');
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('/api/categories', { params: { userId: userName } });
            setCategories(response.data);
        } catch (error) {
            console.error("fail fetch: ", error);
        }
    };

     /*유저 이름 바뀔때 마다 바꾸기*/
    useEffect(() => {
        if (userName) {
            fetchCategories();
        }
    }, [userName]);

    /* 처음 화면 켰을때 */
    useEffect(() => {
        fetchCategories();
    }, []);

    const addCategory = async () => {
        try {
            // console.log("userName: " + userName + "\n" + "newCategoryName: " + newCategory);

            const response = await axios.post('/api/categories', {
                name: newCategory,
                userId: userName,
            });


            if(response.data.success){
                alert("sucess");
                fetchCategories();
            }else {
                alert("response error");
            }
        } catch (error) {
            alert(error);
        }
    };

    return(
    <div>
        <h1>Todo List</h1>

        <div>
            UserName : <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </div>

        <div style={{
                    display:"grid",
                    gridTemplateColumns:"1fr 1fr"
        }}>
            <div>
                <h3>Category</h3>
                <TestCategoryList categories={categories} />

                <br />

                <div>
                    add category: <input type="text"  onChange={(e) => setNewCategory(e.target.value)}/>
                    <button onClick={addCategory}>add</button>
                </div>
            </div>
            <div>
                <h3>Todo List</h3>
            </div>
        </div>
    </div>
    );
}