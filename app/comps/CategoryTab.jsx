import React from "react";
import { Scale } from 'lucide-react';


const CategoryTab = () => {
    return (
        <div className="py-2 px-4 rounded-lg border border-[#979797] flex items-center gap-4 min-h-[88px] cursor-pointer">
            <Scale size={24} className="shrink-0" />
            <p className="text-sm">Business Models & Incentive Structures</p>
        </div>
    )
}

export default CategoryTab;