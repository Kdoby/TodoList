import React from 'react';

const TestCategoryList = ({ categories }) => {
    console.log(categories);

    return (
        <div id="categoryList">
            {categories.map((category) => (
                <div>
                    <span className="categoryColor"
                          style={{
                                  backgroundColor: category.color,
                                  display: 'inline-block',
                                  width: '5px',
                                  height: '20px',
                                  marginRight: '5px',
                                  verticalAlign:'middle'
                          }}
                    >
                        {category.categoryColor}
                    </span>
                    <span key={category.id} className="category">
                        {category.name || 'No Name'}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default TestCategoryList;
