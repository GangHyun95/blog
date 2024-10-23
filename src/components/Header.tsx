import Link from 'next/link';
import {
    IoHomeOutline,
    IoNewspaperOutline,
} from 'react-icons/io5';
import { FiUser } from 'react-icons/fi';
import { TbMessageCircle } from 'react-icons/tb';

export default function Header() {
    const linkClass = 'flex items-center gap-1 hover-class';
    return (
        <header className='flex justify-between items-center p-4'>
            <Link href='/'>
                <h1 className='text-3xl font-semibold'>
                    <span className='text-blue-500'>Hy</span>un
                </h1>
            </Link>
            <nav className='flex gap-3'>
                <Link href='/' className={linkClass}>
                    <IoHomeOutline className='text-xl' />
                    <span>Home</span>
                </Link>
                <Link href='/about' className={linkClass}>
                    <FiUser className='text-xl' />
                    <span>About</span>
                </Link>
                <Link href='/posts' className={linkClass}>
                    <IoNewspaperOutline className='text-xl' />
                    <span>Posts</span>
                </Link>
                <Link href='contact' className={linkClass}>
                    <TbMessageCircle className='text-xl' />
                    <span>Contact</span>
                </Link>
            </nav>
        </header>
    );
}
