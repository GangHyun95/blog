'use client';

import Image from 'next/image';

export default function SocialLogin() {
    return (
        <>
            <button className='flex grow items-center justify-center py-3 gap-3 rounded border border-blue-300 bg-blue-50 hover:bg-blue-100 font-medium'>
                <Image
                    src='/images/google.png'
                    alt='google login'
                    width={24}
                    height={24}
                />
                <span>Google</span>
            </button>
            <button className='flex grow items-center justify-center py-3 gap-3 rounded border border-blue-300 bg-blue-50 hover:bg-blue-100 font-medium'>
                <Image
                    src='/images/kakao.png'
                    alt='kakao login'
                    width={24}
                    height={24}
                />
                <span>KaKao</span>
            </button>
        </>
    );
}
