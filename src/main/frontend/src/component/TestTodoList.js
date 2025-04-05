import React from 'react';

const TestTodoList = ({ allTodos }) => {
    if (!allTodos?.data || !Array.isArray(allTodos.data)) {
        return <div>No todos available</div>;
    }

    return (
        <div>
            {allTodos.data.map((category) => (
            <div key={category.categoryId}>
                <h4>{category.categoryName}</h4>

                <ul>
                {category.todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
                </ul>
            </div>
            ))}
        </div>
    );
};


export default TestTodoList;
