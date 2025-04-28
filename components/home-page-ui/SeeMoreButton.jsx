import React from "react";

const SeeMoreButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className="font-bold text-base text-sky-900 self-end cursor-pointer uppercase">See More</button>
    )
}

export default SeeMoreButton;