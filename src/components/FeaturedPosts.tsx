import { getFeaturedPosts } from '@/service/posts';
import PostsGrid from './PostsGrid';
import Link from 'next/link';

export default  async function FeaturedPosts() {
    const posts = await getFeaturedPosts();
    return (
        <section className='py-16'>
            <div className='px-4 max-w-7xl mx-auto'>
                <h2 className='gradient-text text-5xl font-bold mb-12'>Editor&apos;s picked</h2>
                <PostsGrid posts={posts}/>
                <div className='text-center'>
                    <Link href='/posts'>
                        <button className='gradient-btn text-white text-sm font-medium rounded-md py-2 px-4 mt-8'>
                            <span>Show More Posts</span>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
