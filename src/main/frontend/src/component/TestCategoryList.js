import React, { useState } from 'react';
import axios from 'axios';

import './TestCategoryList.css';


const TestCategoryList = ({ categories, fetchCategories, categoryMode }) => {
    const [editCategoryName, setEditCategoryName] = useState('');
    const [editCategoryColor, setEditCategoryColor] = useState('');


    const deleteCategory = async (id) => {
        const isConfirmed = window.confirm('이 카테고리와 관련된 모든 정보가 삭제됩니다. 계속하시겠습니까?');
        if (!isConfirmed) return;

        try {
            const response = await axios.delete('/api/categories/' + id);

            alert(response.data);
            fetchCategories(categoryMode);
        } catch (error) {
            alert(error);
        }
    };

    const editCategory = async (id, name, color, isActive) => {
        console.log(name, color);

        try{
            const response = await axios.put('/api/categories/' + id, {
                name: name,
                color: color,
                isActive: isActive
            });

            alert(response.data);
            fetchCategories(categoryMode);
            changeToEditMode(id, false);
        } catch (error) {
            alert(error);
        }

    }

    const changeToEditMode = async (id, show) => {
        if (show) {
            // 처음 값을 저장하기 위해서
            const category = categories.find(cat => cat.id === id);
            setEditCategoryName(category.name);
            setEditCategoryColor(category.color.trim());
            document.getElementById("category edit " + id).style.display = 'block';
        }
        else{
            document.getElementById("category edit " + id).style.display = 'none';
        }
    }


    return (
        <div>
            <div id="categoryList">
                {categories.map((category) => (
                    <div key={category.id}>
                        <div id = {`category ${category.id} `} style={{ margin: '5px 0px' }}>
                            <span className="categoryColor"
                                  style={{backgroundColor: category.color}}>
                            </span>

                            <span className="category">
                                {category.name || 'No Name'}
                            </span>

                            <div className="setting-wrapper">
                                {categoryMode ? (
                                    <>
                                        <span>setting</span>
                                        <ul className="setting">
                                            <li onClick={() => changeToEditMode(category.id, true)}>edit</li>
                                            <li onClick={() => editCategory(category.id, null, null, false)}>inactive</li>
                                            <li onClick={() => deleteCategory(category.id)}>delete</li>
                                        </ul>
                                    </>
                                ) : (
                                    <button onClick={() => editCategory(category.id, null, null, true)}>active</button>
                                )}
                            </div>

                        </div>
                        <div id = {`category edit ${category.id}`}
                             style={{
                                display: 'none',
                                margin: '5px 0px'
                             }}
                        >
                            <div>
                                <span>edit</span> <button onClick={() => changeToEditMode(category.id, false)}>x</button>
                            </div>
                            <div>
                                <input type='text'
                                       defaultValue={category.name}
                                       onChange={(e) => setEditCategoryName(e.target.value)}
                                />
                            </div>
                            <div>
                                <input type="color"
                                       defaultValue={category.color.trim()}
                                       onChange={(e) => setEditCategoryColor(e.target.value)}
                                />
                            </div>
                            <div>
                                <button onClick={() => editCategory(category.id, editCategoryName, editCategoryColor, true)}>edit</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestCategoryList;
