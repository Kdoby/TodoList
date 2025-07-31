import TodoListPage from './component/TodoListPage';

import React, {useEffect, useState, useRef } from 'react';
import axios from 'axios';
import StudyLogPage from "./component/StudyLogPage";



function App() {

    return (
    <div>
        <StudyLogPage />
        <br /><br />
    </div>
    );
}

export default App;
