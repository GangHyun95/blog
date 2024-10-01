'use client';

import { useState } from 'react';
import {
    MdOutlineEmail,
    MdLockOutline,
    MdOutlineVisibility,
    MdOutlineVisibilityOff,
} from 'react-icons/md';

export default function InputField() {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name , value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    };
    return (
        <>
            <div className='relative h-14 mb-6'>
                <input
                    type='email'
                    name="email"
                    placeholder='이메일을 입력해주세요.'
                    className='peer pr-5 h-full pl-12 border border-blue-300 rounded text-lg placeholder-blue-400 focus:border-blue-500 transition-colors duration-200'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <MdOutlineEmail className='absolute top-1/2 left-4 -translate-y-1/2 text-blue-400 peer-focus:text-blue-500 transition-colors duration-200' />
            </div>
            <div className='relative h-14 mb-6'>
                <input
                    type={isPasswordShown ? 'text' : 'password'}
                    name="password"
                    placeholder='비밀번호를 입력해주세요.'
                    className='peer pr-5 h-full pl-12 border border-blue-300 rounded text-lg placeholder-blue-400 focus:border-blue-500 transition-colors duration-200'
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <MdLockOutline className='absolute top-1/2 left-4 -translate-y-1/2 text-blue-400 peer-focus:text-blue-500 transition-colors duration-200' />
                <div
                    onClick={() => setIsPasswordShown((prev) => !prev)}
                    className='absolute top-1/2 -translate-y-1/2 right-4 text-xl text-blue-400 cursor-pointer hidden peer-valid:block'
                >
                    {isPasswordShown ? (
                        <MdOutlineVisibility />
                    ) : (
                        <MdOutlineVisibilityOff />
                    )}
                </div>
            </div>
        </>
    );
}
