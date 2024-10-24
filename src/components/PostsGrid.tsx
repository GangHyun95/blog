import { Post } from '@/service/posts';
import PostCard from './PostCard';

type Props = {
    posts: Post[];
    option?: 'default' | 'simple';
};
export default function PostsGrid({ posts, option = 'default' }: Props) {
    return (
        <div className='flex grow flex-wrap gap-4'>
            {posts.map((post, index) => (
                <div
                    key={post.path}
                    className={
                        option === 'default'
                            ? `${index < 2 ? 'w-full md:w-[calc(50%-15px)]' : 'w-full md:w-[calc(33.33%-20px)]'}`
                            : 'w-full md:w-[calc(33.33%-20px)]'
                    }
                >
                    <PostCard post={post} />
                </div>
            ))}
        </div>
    );
}
