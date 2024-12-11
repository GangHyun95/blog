import AdjacentPostCard from '@/components/AdjacentPostCard';
import PostContent from '@/components/PostContent';
import { getPostData } from '@/service/posts';
import Image from 'next/image';

type Props = {
    params: {
        slug: string;
    };
};
export default async function PostPage({ params: { slug } }: Props) {
    const post = await getPostData(slug);

    return (
        <article className='rounded-2xl overflow-hidden bg-surface mt-24 shadow-lg m-4 inner'>
            <Image
                className='w-full h-1/5 max-h-[500px]'
                src={`/images/posts/${post.path}.png`}
                alt={post.title}
                width={760}
                height={420}
            />
            <PostContent post={post} />
            <section className='flex shadow-md'>
                {post.prev && <AdjacentPostCard post={post.prev} type='prev'/>}
                {post.next && <AdjacentPostCard post={post.next} type='next'/>}
            </section>
        </article>
    );
}
