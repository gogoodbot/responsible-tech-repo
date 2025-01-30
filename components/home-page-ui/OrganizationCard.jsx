import React from "react";
import Link from "next/link";
import { Eye } from 'lucide-react';

const OrganizationCard = ({ organization }) => {
    return (
        <div className="flex flex-col gap-2 bg-white w-full p-4 rounded-lg border border-[var(--medium-gray)]">
            <div className="flex items-start justify-between w-full">
                <div className="text-sm px-9 py-3 bg-[var(--light-gray)]">Logo</div>
                <Link href='/' className="flex items-center gap-2 text-sm text-sky-900 font-medium"><Eye size={20} />Preview</Link>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-sm font-bold">{organization.name} </p>
                <p className="text-sm">{organization.summary}</p>
                <p className="text-sm text-[#1daeef]"></p>
            </div>
        </div>
    )
}

export default OrganizationCard;