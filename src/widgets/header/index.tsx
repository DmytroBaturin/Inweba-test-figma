import {PageLayout} from "@/shared/layouts/page";
import Image from "next/image";

import logo from '@/shared/assets/logo/logo.svg';

const navItems = ['Home', 'Courses', 'About', 'Contact us'];

export const Header = () => {
    return(
        <header>
            <PageLayout>
                <Image src={logo} alt={'logo'}/>
                <nav className='list-none flex gap-6'>
                        {navItems.map((item) => (
                            <li key={item} className='text-xs cursor-pointer'>{item}</li>
                        ))}
                </nav>
            <h1>Header</h1>
            </PageLayout>
        </header>
    )
}