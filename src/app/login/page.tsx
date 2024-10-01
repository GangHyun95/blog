import Link from 'next/link';
import InputField from '../components/\bauth/InputField';
import LoginButton from '../components/\bauth/LoginButton';
import SocialLogin from '../components/\bauth/SocialLogin';

export default function LoginPage() {
    return (
        <section className='w-full max-w-md mx-auto px-8 py-6 border rounded'>
            <h2 className='text-center text-xl font-semibold mb-7'>
                Login with
            </h2>
            <div className='flex gap-5'>
                <SocialLogin />
            </div>
            <p className="relative mx-auto my-6 text-center before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-full before:h-[1px] before:bg-blue-300">
                <span className='relative bg-white px-2'>or</span>
            </p>

            <form action='#'>
                <InputField />
                <LoginButton />
            </form>

            <p className='text-center mt-7 mb-1 font-medium'>
                Don't have an account? <Link href='/signup' className='text-blue-500 font-medium hover:underline'>Sign up</Link>
            </p>
        </section>

    );
}