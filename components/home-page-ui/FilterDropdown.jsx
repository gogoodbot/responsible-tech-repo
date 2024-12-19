import React, { useState } from "react";
import { SlidersHorizontal as FilterIcon, ChevronsUp } from 'lucide-react';

const filterData = [
    {
        title: "CONTENT TYPE",
        type: "checkbox",
        options: ['Magazine Article', 'Web Resource', 'Conference Proceeding', 'Journal Article', 'Newspaper Article']
    },
    {
        title: "Discipline",
        type: "checkbox",
        options: ['business', 'comp science', 'engineering', 'government', 'law']
    },
    {
        title: "SUBJECT TERMS",
        type: "checkbox",
        options: ['artificial intelligence', 'privacy', 'data integrity', 'bills', 'personal information']
    },
    {
        title: "PUBLICATION DATE",
        type: "radio",
        options: ['1 year', '3 year', '5 year', '10 year', 'Custom']
    },
]

const FilterDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown();
                }}
                className="shadow text-base font-bold text-sky-900 uppercase flex items-center justify-center gap-2 px-2 py-2.5 rounded-md border border-sky-900 min-w-[116px] hover:bg-zinc-100"
            >
                <FilterIcon size={20} />
                Filter
            </button>

            {isOpen && (
                <div className="flex items-start absolute right-0 mt-2  bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-10">
                    {filterData.map((filterCategory, index) => (
                        <div key={index} className="w-[227px]">
                            <h3 className="font-semibold">{filterCategory.title}</h3>
                            {filterCategory.options.map((option, i) => (
                                filterCategory.type === 'checkbox' ? (
                                    <label key={i} className="flex gap-4 items-center mt-2">
                                        <input type="checkbox" className="accent-black" />
                                        {option}
                                    </label>
                                ) : (
                                    <label key={i} className="flex gap-4 items-center mt-2">
                                        <input type="radio" name="date" className="accent-black" />
                                        {option}
                                    </label>
                                )
                            ))}
                        </div>
                    ))}


                    <ChevronsUp size={20} onClick={toggleDropdown} className="cursor-pointer" />

                </div>
            )}
        </div>
    );
};

export default FilterDropdown;
