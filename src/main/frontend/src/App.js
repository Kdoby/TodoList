import TodoListPage from './component/TodoListPage';
import TimeTablePage from './component/TimeTablePage.js';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Test from './component/Test';

function App() {
    const [hello, setHello] = useState('');

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);



    return (
    <div>
        <div>
            TEST || 백엔드에서 가져온 데이터입니다 : {hello}
        </div>

        <Test />

        <TodoListPage />
        <TimeTablePage />
    </div>
    );
}

export default App;
