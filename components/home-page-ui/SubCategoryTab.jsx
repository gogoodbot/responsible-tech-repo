import React from "react";


const SubCategoryTab = ({ label, setSelectedSubCategory, isSelected }) => {
    const handleSubCategoryClick = (subCategory) => {
        setSelectedSubCategory(subCategory);
    };

    return (
        <p className={(isSelected) ? "subcategory-btn subcategory-btn--active" : "subcategory-btn"} onClick={() => handleSubCategoryClick(label)}>{label}</p>
    )
}

export default SubCategoryTab;