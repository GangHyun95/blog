import FilterablePosts from '@/components/FilterablePosts';
import Container from '@/components/layout/Container';
import { getAllPosts } from '@/service/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "All Posts",
    description: "블로그 글",
}

export default async function PostsPage() {
    const posts = await getAllPosts();
    const categories = [...new Set(posts.map((post) => post.category))];
    return (
        <section className='pt-32 inner'>
            <Container>
                <FilterablePosts posts={posts} categories={categories} />
            </Container>
        </section>
    );
}
