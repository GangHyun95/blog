import ContactForm from '@/components/ContactForm';
import { AiFillGithub } from 'react-icons/ai';
import { SiBlogger } from 'react-icons/si';

const LINKS = [
    { icon: <AiFillGithub />, url: 'https://github.com/GangHyun95' },
    { icon: <SiBlogger />, url: 'https://hy-un.tistory.com/' },
];
export default function ContactPage() {
    return (
        <section className='pt-32 flex flex-col items-center inner'>
            <h2 className='text-3xl font-bold my-2'>Contact Me</h2>
            <p>hgh6128@gmail.com</p>
            <div className='flex gap-4 my-2'>
                {LINKS.map((link, index) => (
                    <a key={index} href={link.url} target='_blank' rel='noreferrer' className='text-5xl hover-class'>
                        {link.icon}
                    </a>
                ))}
            </div>
            <h2 className='text-3xl font-bold my-8'>Or Send me an email</h2>
            <ContactForm />
        </section>
    );
}
