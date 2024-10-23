import { Post } from '@/service/posts';
import PostCard from './PostCard';

export default function PostsGrid({ posts }: { posts: Post[] }) {
    return (
        <div className="flex flex-wrap gap-4">
            {posts.map((post, index) => (
                <div
                    key={post.path}
                    className={`${index < 2 ? 'w-full md:w-[calc(50%-15px)]' : 'w-full md:w-[calc(33.33%-20px)]'}`}
                >
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    );
}
