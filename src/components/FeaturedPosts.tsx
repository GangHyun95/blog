import { getFeaturedPosts } from '@/service/posts';
import PostsGrid from './PostsGrid';

export default  async function FeaturedPosts() {
    const posts = await getFeaturedPosts();
    return (
        <section className='pt-16'>
            <div className='px-4 max-w-7xl mx-auto'>
                <h2 className='gradient-text text-5xl font-bold mb-12'>Editor&apos;s picked</h2>
                <PostsGrid posts={posts}/>
            </div>
        </section>
    );
}
