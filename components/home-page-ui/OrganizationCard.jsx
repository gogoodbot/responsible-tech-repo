import React from "react";
import Image from "next/image";
import Link from "next/link";

const OrganizationCard = ({ organization }) => {
    return (
        <div className="flex flex-col gap-2 bg-goodbot-background-light w-full p-4 rounded-lg border border-goodbot-gray-medium">
            <div className="flex items-start justify-between  w-full ">
                <Image src={organization.image_url} alt={`${organization.name}'s logo`} height={200} width={200} className="h-10 w-fit" />
            </div>
            <div className="flex flex-col gap-2 text-goodbot-text-dark">
                <p className="text-sm font-bold">{organization.name} </p>
                <p className="text-sm line-clamp-3">{organization.about}</p>
                {organization.tags && organization.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                        {organization.tags.map((tag, index) => (
                            <Link
                                key={index}
                                href="#"
                                className="text-sm text-goodbot-text-tag"
                            >{tag}</Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default OrganizationCard;