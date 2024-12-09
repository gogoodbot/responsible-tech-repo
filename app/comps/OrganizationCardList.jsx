import React from "react";
import OrganizationCard from "./OrganizationCard";
import SeeMoreButton from "./SeeMoreButton";

const OrganizationCardList = () => {
    return (
        <div className="flex flex-col gap-4 items-start w-full">
            <h3 className="font-bold text-base">Organizations</h3>
            <div className="w-full grid grid-cols-4 grid-rows-1 gap-4">
                <OrganizationCard />
                <OrganizationCard />
                <OrganizationCard />
                <OrganizationCard />
                <OrganizationCard />
                <OrganizationCard />
                <OrganizationCard />
                <OrganizationCard />
            </div>
            <SeeMoreButton />
        </div>
    )
}

export default OrganizationCardList;