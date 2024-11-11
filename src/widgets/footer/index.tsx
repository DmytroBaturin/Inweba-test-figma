import * as React from "react";

export const Footer = () => {
    return (
        <footer className='px-[6%] mt-[60px] py-[20px] border-t-[1px] flex justify-center items-center w-full border-primary/10'>
            <div className='max-w-[1366px]  flex w-full justify-between items-center'>
                <nav className='flex  gap-3'>
                    <li className='text-xs cursor-pointer'>Support us</li>

                </nav>
                <p className='text-xs'>@ 2024 Partnerships</p>
            </div>
        </footer>
    );
};
