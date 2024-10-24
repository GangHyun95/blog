import FilterablePosts from '@/components/FilterablePosts';
import Container from '@/components/layout/Container';
import { getAllPosts } from '@/service/posts';

export default async function PostsPage() {
    const posts = await getAllPosts();
    const categories = [...new Set(posts.map((post) => post.category))];
    return (
        <Container>
            <FilterablePosts posts={posts} categories={categories} />
        </Container>
    );
}
