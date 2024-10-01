import Link from 'next/link';
import { IoHomeOutline } from 'react-icons/io5';
import { TbMessageCircle } from 'react-icons/tb';
import { RiLoginBoxLine } from 'react-icons/ri';
export default function Header() {
    return (
        <header className='fixed top-0 left-0 w-full h-16 flex items-center z-40'>
            <div className='flex justify-between items-center w-full max-w-screen-2xl px-4'>
                <Link href='/'>
                    <h1 className='text-3xl font-bold'>
                        Hy<span className='text-blue-500'>un</span>
                    </h1>
                </Link>
                <nav className='flex gap-4'>
                    <Link href='/' className='flex items-center gap-1 hover-class'>
                        <IoHomeOutline className='text-xl' />
                        <span>Home</span>
                    </Link>
                    <Link href='contact' className='flex items-center gap-1 hover-class'>
                        <TbMessageCircle className='text-xl'/>
                        <span>Contact</span>
                    </Link>
                    <Link href='/login' className='flex items-center gap-1 hover-class'>
                        <RiLoginBoxLine className='text-xl'/>
                        <span>Login</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
