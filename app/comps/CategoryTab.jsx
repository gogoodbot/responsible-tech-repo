import React from "react";
import { Scale } from 'lucide-react';


const CategoryTab = ({ data, setSelectedCategory, isSelected, setSelectedSubCategory }) => {
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setSelectedSubCategory('All')
    };
    return (
        <div className={(isSelected) ? 'category-btn category-btn--active' : 'category-btn'} onClick={() => { handleCategoryClick(data) }}>
            <Scale size={24} className="shrink-0" />
            <p className="text-sm">{data.category}</p>
        </div>
    )
}

export default CategoryTab;