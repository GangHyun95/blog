import { getFeaturedPosts } from '@/service/posts';
import PostCard from './PostCard';
import MultiCarousel from './MultiCarousel';

export default async function CarouselPosts() {
    const posts = await getFeaturedPosts();
    return (
        <section className='py-16'>
            <div className='px-4 max-w-7xl mx-auto'>
                <h2 className='gradient-text text-5xl font-bold mb-12'>
                    Recent Posts
                </h2>
                <MultiCarousel>
                    {posts.map((post) => (
                        <PostCard key={post.path} post={post} />
                    ))}
                </MultiCarousel>
            </div>
        </section>
    );
}
