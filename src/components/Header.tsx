'use client';

import Link from 'next/link';
import { IoHomeOutline, IoNewspaperOutline } from 'react-icons/io5';
import { FiUser } from 'react-icons/fi';
import { TbMessageCircle } from 'react-icons/tb';
import { usePathname } from 'next/navigation';

export default function Header() {
    const linkClass = 'flex items-center gap-1 hover-class';
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path ? 'text-sky-500' : 'text-blue-200';

    return (
        <header className='fixed top-0 left-0 right-0 z-10 bg-background'>
            <div className='w-full max-w-7xl flex justify-between items-center p-4 text-blue-200 mx-auto'>
                <Link href='/'>
                    <h1 className='text-3xl font-semibold'>
                        <span>Hy</span>un
                    </h1>
                </Link>
                <nav className='flex gap-4'>
                    <Link href='/' className={`${linkClass} ${isActive('/')}`}>
                        <IoHomeOutline className='text-xl' />
                        <span>Home</span>
                    </Link>
                    <Link href='/about' className={`${linkClass} ${isActive('/about')}`}>
                        <FiUser className='text-xl' />
                        <span>About</span>
                    </Link>
                    <Link href='/posts' className={`${linkClass} ${isActive('/posts')}`}>
                        <IoNewspaperOutline className='text-xl' />
                        <span>Posts</span>
                    </Link>
                    <Link href='contact' className={`${linkClass} ${isActive('/contact')}`}>
                        <TbMessageCircle className='text-xl' />
                        <span>Contact</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
