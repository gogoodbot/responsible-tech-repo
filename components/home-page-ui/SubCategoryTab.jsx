import React from "react";


const SubCategoryTab = ({ label, setSelectedSubCategory, isSelected }) => {
    const handleSubCategoryClick = (subCategory) => {
        setSelectedSubCategory(subCategory);
    };

    return (
        <p className={`subcategory-btn ${isSelected ? 'subcategory-btn--active' : ''}`} onClick={() => handleSubCategoryClick(label)}>{label}</p>
    )
}

export default SubCategoryTab;