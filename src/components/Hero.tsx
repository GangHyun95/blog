import Image from 'next/image';
import profileImage from '../../public/images/profile.png';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className='text-center'>
            <Image
                className='mx-auto rounded-full'
                src={profileImage}
                alt='Picture of the author'
                width={250}
                height={250}
                priority
            />
            <h2 className='text-xl font-semibold mt-2'>I'm GangHyun</h2>
            <h3 className='text-xl font-semibold mt-1'>Front-End Developer</h3>
            <Link href='/contact'>
                <button className='bg-blue-100 font-medium rounded-md py-2 px-4 mt-2 text-blue-500 hover:bg-blue-200 transition-colors duration-300'>Contact Me</button>
            </Link>
        </section>
    );
}
