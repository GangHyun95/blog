import { getFeaturedPosts } from '@/service/posts';
import PostsGrid from './PostsGrid';
import Link from 'next/link';
import Container from './layout/Container';

export default  async function FeaturedPosts() {
    const posts = await getFeaturedPosts();
    return (
        <section className='py-16'>
            <Container>
                <h2 className='gradient-text text-5xl font-bold mb-12'>Editor&apos;s picked</h2>
                <PostsGrid posts={posts}/>
                <div className='text-center'>
                    <Link href='/posts'>
                        <button className='gradient-btn text-white text-sm font-medium rounded-md py-2 px-4 mt-8'>
                            <span>Show More Posts</span>
                        </button>
                    </Link>
                </div>
            </Container>
        </section>
    );
}
