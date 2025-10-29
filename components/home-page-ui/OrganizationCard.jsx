"use client";
import React from "react";
import Link from "next/link";
import { Eye } from "lucide-react";
import { useState } from "react";
import Modal from "@/app/comps/Modal/Modal";

const OrganizationCard = ({ organization }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-2 bg-white w-full p-4 rounded-lg border border-[var(--medium-gray)]">
      <div className="flex items-start justify-between w-full">
        <div className="text-sm px-9 py-3 bg-[var(--light-gray)]">Logo</div>
        <button
          className="flex items-center gap-2 text-sm text-sky-900 font-medium"
          onClick={() => setIsOpen(true)}
        >
          <Eye size={20} />
          Preview
        </button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen((prev) => !prev)}
          data={organization}
          isTopVoice={false}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm font-bold">{organization.name} </p>
        <p className="text-sm">{organization.summary}</p>
        <p className="text-sm text-[var(--hashtag-blue)]"></p>
      </div>
    </div>
  );
};

export default OrganizationCard;
