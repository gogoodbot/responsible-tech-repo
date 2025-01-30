import React from "react";
import { Search as SearchIcon } from "lucide-react";

const SeeLessButton = ({ onClick }) => {
    return (
        <div className="flex gap-x-2.5 items-center self-end">
            <button className="shadow text-base font-bold uppercase flex items-center justify-center gap-2 bg-[var(--button-primary)] px-2 py-2.5 rounded-md min-w-[116px] hover:bg-[var(--button-primary-hover)]"><SearchIcon size={20} />find more</button>
            <button onClick={onClick} className="font-bold text-base text-sky-900 cursor-pointer">See Less</button>
        </div>
    )
}

export default SeeLessButton;