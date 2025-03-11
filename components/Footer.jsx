import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="mt-28 bg-goodbot-primary-starryNightBlack py-[100px] font-poppins">
            <div className="container flex flex-col justify-center items-center border-b border-white border-opacity-20">
                <p className="text-sm text-white uppercase tracking-[2.8px] text-opacity-60 mb-4">Join us in advancing responsible tech everywhere.</p>
                <p className="text-[50px] text-white font-bold">Request More Information</p>
                <p className="max-w-[430px] text-lg text-opacity-80 text-white text-center mb-[45px]">GoodBot is a catalyst for research and practice in innovative technology governance</p>
                <button className="min-w-[224px] py-[18px] bg-sky-900 text-base text-white rounded-[30px] mb-[50px]">Contact Us</button>
                <p className="text-sm text-white text-opacity-80 mb-[48px]">© GoodBot Responsible Repo</p>
            </div>
            <div className="container flex items-center w-full justify-between mt-[48px]">
                <Image src='/svg/logo-white.svg' alt="GoodBot Logo" width={179.26} height={42} />
                <div className="flex items-center text-white text-base gap-x-8">
                    <Link href="/">Team</Link>
                    <Link href="/">Case Studies</Link>
                    <Link href="/">Publication</Link>
                </div>
                <div className="flex items-center gap-4">
                    <Link className="border-2 w-[45px] h-[45px] border-white border-opacity-25 rounded-full flex items-center justify-center" href='/'>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.27279 3.375C3.18284 3.375 3.92058 2.61948 3.92058 1.6875C3.92058 0.75552 3.18284 0 2.27279 0C1.36274 0 0.625 0.75552 0.625 1.6875C0.625 2.61948 1.36274 3.375 2.27279 3.375Z" fill="white" />
                            <path d="M3.64595 4.5H0.899632C0.748035 4.5 0.625 4.626 0.625 4.78125V13.2188C0.625 13.374 0.748035 13.5 0.899632 13.5H3.64595C3.79755 13.5 3.92058 13.374 3.92058 13.2188V4.78125C3.92058 4.626 3.79755 4.5 3.64595 4.5Z" fill="white" />
                            <path d="M11.8288 4.11247C10.655 3.70072 9.18679 4.06241 8.30632 4.71097C8.27612 4.59003 8.16846 4.50003 8.04048 4.50003H5.29416C5.14257 4.50003 5.01953 4.62603 5.01953 4.78128V13.2188C5.01953 13.374 5.14257 13.5 5.29416 13.5H8.04048C8.19208 13.5 8.31511 13.374 8.31511 13.2188V7.15503C8.75892 6.76353 9.3307 6.63866 9.79867 6.84228C10.2524 7.0386 10.5122 7.51785 10.5122 8.15628V13.2188C10.5122 13.374 10.6352 13.5 10.7868 13.5H13.5331C13.6847 13.5 13.8077 13.374 13.8077 13.2188V7.58985C13.7764 5.27853 12.7147 4.42297 11.8288 4.11247Z" fill="white" />
                        </svg>

                    </Link>
                    <Link className="border-2 w-[45px] h-[45px] border-white border-opacity-25 rounded-full flex items-center justify-center" href='/'>
                        <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.56913 14.393L3.54914 8.09607H0.933594V5.39738H3.54914V3.59825C3.54914 1.17015 5.00644 0 7.10573 0C8.11131 0 8.97556 0.0772455 9.22742 0.111771V2.64928L7.77146 2.64996C6.62975 2.64996 6.40868 3.20973 6.40868 4.03116V5.39738H9.65207L8.78022 8.09607H6.40867V14.393H3.56913Z" fill="white" />
                        </svg>

                    </Link>
                    <Link className="border-2 w-[45px] h-[45px] border-white border-opacity-25 rounded-full flex items-center justify-center" href='/'>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.96477 3.94232C10.3854 3.94232 10.7264 3.59311 10.7264 3.16232C10.7264 2.73154 10.3854 2.38232 9.96477 2.38232C9.54413 2.38232 9.20312 2.73154 9.20312 3.16232C9.20312 3.59311 9.54413 3.94232 9.96477 3.94232Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.5 6.5C3.5 8.29238 4.92333 9.75 6.67352 9.75C8.42372 9.75 9.84705 8.29238 9.84705 6.5C9.84705 4.70763 8.42372 3.25 6.67352 3.25C4.92333 3.25 3.5 4.70763 3.5 6.5ZM5.08594 6.5C5.08594 5.60381 5.7976 4.875 6.6727 4.875C7.5478 4.875 8.25946 5.60381 8.25946 6.5C8.25946 7.39619 7.5478 8.125 6.6727 8.125C5.7976 8.125 5.08594 7.39619 5.08594 6.5Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.50165 13H9.84869C11.4799 13 13.0222 11.4205 13.0222 9.75V3.25C13.0222 1.5795 11.4799 0 9.84869 0H3.50165C1.87046 0 0.328125 1.5795 0.328125 3.25V9.75C0.328125 11.4205 1.87046 13 3.50165 13ZM1.91406 3.25C1.91406 2.49031 2.75901 1.625 3.50082 1.625H9.84787C10.5897 1.625 11.4346 2.49031 11.4346 3.25V9.75C11.4346 10.5097 10.5897 11.375 9.84787 11.375H3.50082C2.74473 11.375 1.91406 10.5243 1.91406 9.75V3.25Z" fill="white" />
                        </svg>


                    </Link>
                    <Link className="border-2 w-[45px] h-[45px] border-white border-opacity-25 rounded-full flex items-center justify-center" href='/'>
                        <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.6372 0.343069C15.3062 0.524413 15.8332 1.05589 16.0127 1.72945C16.346 2.95882 16.3304 5.52198 16.3304 5.52198C16.3304 5.52198 16.3281 8.07101 16.0049 9.2996C15.823 9.97238 15.2937 10.5031 14.6255 10.6836C13.4031 11.0055 8.51248 11 8.51248 11C8.51248 11 3.63515 10.9945 2.4002 10.6569C1.73043 10.4756 1.20351 9.94411 1.02397 9.27133C0.703911 8.05452 0.707032 5.49215 0.707032 5.49215C0.707032 5.49215 0.710156 2.94234 1.03255 1.71296C1.21366 1.04018 1.75541 0.496937 2.41113 0.317162C3.63437 -0.00548932 8.52419 5.96305e-06 8.52419 5.96305e-06C8.52419 5.96305e-06 13.4148 0.00550127 14.6372 0.343069ZM6.96094 3.14404L6.95703 7.85429L11.0256 5.50309L6.96094 3.14404Z" fill="white" />
                        </svg>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;