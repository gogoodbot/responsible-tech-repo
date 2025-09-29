import React from 'react';
import Image from 'next/image';


const DataMissingCard = ({ title }) => {
    return (
        <div className='flex flex-col gap-y-8 px-8 py-10 w-full bg-[#ecfcff] rounded-3xl font-poppins'>
            <h3 className='font-bold text-2xl text-[#0C4A6E] tracking-wide"'>{title}</h3>
            <div className='flex gap-2 items-center justify-start'>
                <Image src="/svg/not-found.svg" alt="Data Missing Illustration" width={40} height={40} />
                <div className='text-[#242424]'>
                    <p className='text-base font-bold uppercase'>There is no data to display at the moment.</p>
                    <p className='text-base font-normal'>We’re still adding more to our database!</p>
                </div>
            </div>
            <p className='text-sm font-medium'>Are you an organization? Sign up to add your resource here.</p>
        </div>
    )
}

export default DataMissingCard;