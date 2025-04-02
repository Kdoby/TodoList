import React from 'react';

const TestCategoryList = ({ categories }) => {
    return (
        <div id="categoryList">
            {categories.map((category) => (
                <div>
                    <span className="category" style={{backgroundColor:category.categoryColor}}>{category.categoryColor} | </span>
                    <span key={category.id} className="category">
                        {category.name || 'No Name'}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default TestCategoryList;
