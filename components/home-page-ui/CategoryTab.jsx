import React from "react";


const CategoryTab = ({ data, setSelectedCategory, isSelected, setSelectedSubCategory, allSubcategories }) => {
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSelectedSubCategory(allSubcategories)
    };
    return (
        <div className={(isSelected) ? 'category-btn category-btn--active' : 'category-btn'} onClick={() => { handleCategoryClick(data) }}>
            <svg className="w-6 h-6 flex-shrink-0 fill-current">
                <use className="fill-current" xlinkHref={`/svg/category-tab-icons.svg#${data.icon}`}></use>
            </svg>
            <p className="text-sm">{data.category}</p>
        </div>
    )
}

export default CategoryTab;