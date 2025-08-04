import TodoListPage from './component/TodoListPage';
import StudyLogPage from "./component/StudyLogPage";

import React, {useEffect, useState, useRef } from 'react';
import axios from 'axios';



function App() {

    return (
    <div>
        <StudyLogPage />
        <br /><br />
        <TodoListPage />
    </div>
    );
}

export default App;
