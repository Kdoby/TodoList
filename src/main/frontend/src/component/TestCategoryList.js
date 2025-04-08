import React from 'react';

import './TestCategoryList.css';

const TestCategoryList = ({ categories }) => {
    console.log(categories);

    return (
        <div id="categoryList">
            {categories.map((category) => (
                <div style={{
                        margin: '5px 0px'
                }}>
                    <span className="categoryColor"
                          style={{
                                  backgroundColor: category.color,
                                  display: 'inline-block',
                                  width: '5px',
                                  height: '30px',
                                  margin: '5px',
                                  verticalAlign:'middle'
                          }}
                    ></span>
                    <span key={category.id} className="category">
                        {category.name || 'No Name'}
                    </span>
                    <div class="setting-wrapper"
                         style={{
                            display:'inline',
                            float:'right'
                    }}>
                      <span>setting</span>
                      <ul class="setting">
                        <li>edit</li>
                        <li>inactive</li>
                        <li>delete</li>
                      </ul>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default TestCategoryList;
