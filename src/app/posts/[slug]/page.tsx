import MarkdownViewer from '@/components/MarkdownViewer';
import { getPostData } from '@/service/posts';
import Image from 'next/image';
import { AiTwotoneCalendar } from 'react-icons/ai';

type Props = {
    params: {
        slug: string;
    };
};
export default async function PostPage({ params: { slug } }: Props) {
    const post = await getPostData(slug);

    return (
        <article className='rounded-2xl overflow-hidden bg-surface mt-24 shadow-lg m-4'>
            <Image
                className='w-full h-1/5 max-h-[500px]'
                src={`/images/posts/${post.path}.png`}
                alt={post.title}
                width={760}
                height={420}
            />
            <section className='flex flex-col p-4'>
                <div className='flex items-center self-end text-blue-300 mb-4'>
                    <AiTwotoneCalendar />
                    <p className='font-semibold ml-1'>{post.date.toString()}</p>
                </div>
                <h1 className='text-4xl font-bold text-blue-300 mb-4'>{post.title}</h1>
                <p className='text-xl font-bold text-blue-100'>{post.description}</p>
                <div className='w-44 border-2 border-sky-600 mt-4 mb-8'></div>
                <MarkdownViewer content={post.content} />
            </section>
        </article>
    );
}
