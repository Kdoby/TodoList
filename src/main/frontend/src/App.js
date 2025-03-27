import './App.css';
import TodoListPage from './component/TodoListPage';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
   const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
    <div>
        <div>
            백엔드에서 가져온 데이터입니다 : {hello}
        </div>

        <TodoListPage />
    </div>
    );
}

export default App;
