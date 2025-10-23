import React from "react";
import Image from "next/image";

const OrganizationCard = ({ organization }) => {
    return (
        <div className="flex flex-col gap-2 bg-goodbot-background-light w-full p-4 rounded-lg border border-goodbot-gray-medium">
            <div className="flex items-start justify-between  w-full ">
                <Image src={organization.image_url} alt={`${organization.name}'s logo`} height={500} width={500} className="h-10 w-fit" />
            </div>
            <div className="flex flex-col gap-2 text-goodbot-text-dark">
                <p className="text-sm font-bold">{organization.name} </p>
                <p className="text-sm line-clamp-3">{organization.about}</p>
            </div>
        </div>
    )
}

export default OrganizationCard;