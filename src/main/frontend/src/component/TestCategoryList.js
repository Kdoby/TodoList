import React from 'react';
import axios from 'axios';

import './TestCategoryList.css';


const TestCategoryList = ({ categories, fetchCategories, categoryMode }) => {

    const deleteCategory = async (id) => {
        try {
            const response = await axios.delete('/api/categories/' + id);

            if (response.data.success) {
                alert(response.data.message);
                fetchCategories(categoryMode);
            } else {
                alert("response error");
            }
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div>
            <div id="categoryList">
                {categories.map((category) => (
                    <div key={category.id} style={{ margin: '5px 0px' }}>
                        <span className="categoryColor"
                              style={{backgroundColor: category.color}}>
                        </span>

                        <span className="category">
                            {category.name || 'No Name'}
                        </span>

                        <div className="setting-wrapper">
                            <span>setting</span>
                            <ul className="setting">
                                <li>edit</li>
                                <li>inactive</li>
                                <li onClick={() => deleteCategory(category.id)}>delete</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestCategoryList;
