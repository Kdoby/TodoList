import React from 'react';
// import axios from 'axios';

import './TestCategoryList.css';

const TestCategoryList = ({ categories }) => {
    const deleteCategory = async() => {
        alert("123");
        // 카테고리 삭제 axios *********************************
    };

    return (
        <div>
            <div id="categoryList">
                {categories.map((category) => (
                    <div style={{ margin: '5px 0px' }}>
                        <span className="categoryColor"
                              style={{backgroundColor: category.color}}
                        ></span>

                        <span key={category.id} className="category">
                            {category.name || 'No Name'}
                        </span>

                        <div className="setting-wrapper"
                             style={{

                        }}>
                            <span>setting</span>
                            <ul class="setting">
                                <li>edit</li>
                                <li>inactive</li>
                                <li onClick={deleteCategory}>delete</li>
                            </ul>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestCategoryList;
