import { Post } from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';

export default function PostCard({
    post: { title, description, date, category, path },
}: {
    post: Post;
}) {
    return (
        <Link href={`/posts/${path}`}>
            <article className='rounded-2xl overflow-hidden shadow-lg border border-slate-700 p-5 transform transition-transform duration-300 hover:translate-y-[-5px] group'>
                <div className='w-full aspect-[16/9] relative'>
                    <Image
                        className='rounded-2xl object-cover'
                        src={`/images/posts/${path}.png`}
                        alt={title}
                        fill
                    />
                </div>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-between text-sm mt-6 mb-5'>
                        <span>#{category}</span>
                        <time className=''>{date.toString()}</time>
                    </div>
                    <h3 className='text-2xl font-bold text-blue-200 mb-5 group-hover:text-blue-400 transition-color duration-300'>
                        {title}
                    </h3>
                    <p className='w-full truncate'>{description}</p>
                </div>
            </article>
        </Link>
    );
}
