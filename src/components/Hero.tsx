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
            <h2 className='text-2xl font-semibold mt-2'>Hello, I&apos;m <span className='gradient-text'>GangHyun</span></h2>
            <h3 className='text-2xl font-semibold mt-1'>Front-End Developer</h3>
            <Link href='/contact'>
                <button className='gradient-btn text-white text-sm font-medium rounded-md py-2 px-4 mt-2'>
                    <span>Contact Me</span>
                </button>
            </Link>
        </section>
    );
}
