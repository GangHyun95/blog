import { getFeaturedPosts } from '@/service/posts';
import PostCard from './PostCard';
import MultiCarousel from './MultiCarousel';
import Container from './layout/Container';

export default async function CarouselPosts() {
    const posts = await getFeaturedPosts();
    return (
        <section className='py-16'>
            <Container>
                <h2 className='gradient-text text-5xl font-bold mb-12'>
                    Recent Posts
                </h2>
                <MultiCarousel>
                    {posts.map((post) => (
                        <PostCard key={post.path} post={post} />
                    ))}
                </MultiCarousel>
            </Container>
        </section>
    );
}
