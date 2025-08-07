"use client";
import React from "react";
import Link from "next/link";
import { Eye } from 'lucide-react';
import { useState } from "react";
import Modal from "@/app/comps/Modal/Modal";

const TopVoiceCard = ({ topVoice }) => {
      const [isOpen,setIsOpen]=useState(false);
    return (
        <div className="flex flex-col bg-white w-full  rounded-lg border border-[var(--medium-gray)] overflow-hidden">
            <div className="flex items-start justify-between w-full relative bg-[var(--button-primary)] p-4">
                <div className="flex gap-3 items-start justify-start">
                    <div className="w-10 h-10 rounded-full bg-[var(--light-gray)]"></div>
                </div>
                {/* <Link href='/' className="flex items-center gap-2 text-sm text-sky-900 font-medium"><Eye size={20} />Preview</Link> */}
                 <button  className="flex items-center gap-2 text-sm text-sky-900 font-medium" onClick={() => setIsOpen(true)}><Eye size={20} />Preview</button>
                  <Modal  isOpen={isOpen} onClose={()=>setIsOpen(prev=>!prev)} data={topVoice} isTopVoice={true}/>
            </div>
            <div className="p-4">
                <p className="text-base font-semibold text-[var(--dark-gray)]">{topVoice.first_name} {topVoice.last_name}</p>
                <p className="text-sm font-medium text-gray-400">{topVoice.title}</p>
                <p className="text-sm mt-2">{topVoice.sec_focus}</p>
            </div>
                     
        </div>
    )
}

export default TopVoiceCard;