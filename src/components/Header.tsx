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
        <header className='fixed top-0 left-0 right-0 z-10 bg-background'>
            <div className='w-full max-w-7xl flex justify-between items-center p-4 text-blue-200 mx-auto'>
                <Link href='/'>
                    <h1 className='text-3xl font-semibold'>
                        <span>Hy</span>un
                    </h1>
                </Link>
                <nav className='flex gap-4'>
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
            </div>
        </header>
    );
}
