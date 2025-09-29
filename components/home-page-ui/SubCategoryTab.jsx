import React from "react";


const SubCategoryTab = ({ label, onClick, isSelected }) => {

    return (
        <p className={`${isSelected ? 'subcategory-btn subcategory-btn--active' : 'subcategory-btn'}`} onClick={onClick}>{label}</p>
    )
}

export default SubCategoryTab;