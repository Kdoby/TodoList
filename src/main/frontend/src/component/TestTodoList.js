import React from 'react';

const TestTodoList = ({ allTodos }) => {
    if (!allTodos?.data || !Array.isArray(allTodos.data)) {
        return <div>No todos available</div>;
    }

    return (
        <div>
            {allTodos.data.map((category) => (
            <div key={category.categoryId}
                 style={{
                    margin: '20px 0px',
                    fontSize:'20px'
                 }}
            >
                <span className="categoryColor"
                      style={{
                              backgroundColor: category.categoryColor,
                              display: 'inline-block',
                              width: '5px',
                              height: '30px',
                              marginRight: '10px',
                              verticalAlign:'middle'
                      }}
                ></span>
                <span><b>{category.categoryName}</b></span>

                <div style={{
                        marginLeft: '20px'
                }}>
                {category.todos.map((todo) => (
                    <div key={todo.id}>
                    <input type="checkbox"
                           style={{
                                background: '#999999'
                    }}/> {todo.title}
                    </div>
                ))}
                </div>
            </div>
            ))}
        </div>
    );
};


export default TestTodoList;
