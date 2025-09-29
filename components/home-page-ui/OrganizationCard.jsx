import React from "react";
import Link from "next/link";
import { Eye } from 'lucide-react';

const OrganizationCard = ({ organization }) => {
    return (
        <div className="flex flex-col gap-2 bg-white w-full p-4 rounded-lg border border-[var(--medium-gray)]">
            <div className="flex items-start justify-between  w-full ">
                <div className="text-sm h-10 px-9 content-center bg-[var(--light-gray)]">Logo</div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-sm font-bold">{organization.name} </p>
                <p className="text-sm line-clamp-3">{organization.about}</p>
                <p className="text-sm text-[var(--hashtag-blue)]"></p>
            </div>
        </div>
    )
}

export default OrganizationCard;