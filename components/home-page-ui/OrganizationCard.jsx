import React from "react";

const OrganizationCard = ({ organization }) => {
    return (
        <div className="flex flex-col gap-2 bg-goodbot-background-light w-full p-4 rounded-lg border border-goodbot-gray-medium">
            <div className="flex items-start justify-between  w-full ">
                <div className="text-sm h-10 px-9 content-center bg-goodbot-gray-light">Logo</div>
            </div>
            <div className="flex flex-col gap-2 text-goodbot-text-dark">
                <p className="text-sm font-bold">{organization.name} </p>
                <p className="text-sm line-clamp-3">{organization.about}</p>
            </div>
        </div>
    )
}

export default OrganizationCard;