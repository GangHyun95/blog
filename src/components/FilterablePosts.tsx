'use client';

import { Post } from '@/service/posts';
import { useState } from 'react';
import PostsGrid from './PostsGrid';
import Categories from './Categories';

type Props = {
    posts: Post[];
    categories: string[];
};
export default function FilterablePosts({ posts, categories }: Props) {
    const [selected, setSelected] = useState('all');
    const filtered =
        selected === 'all'
            ? posts
            : posts.filter((post) => post.category === selected);

    console.log(categories);
    return (
        <section className="pb-16 flex flex-col md:flex-row">
            <div className="order-2 md:order-1 md:flex-1">
                <PostsGrid posts={filtered} option="simple" />
            </div>
            <div className="order-1 md:order-2">
                <Categories categories={['all', ...categories]} selected={selected} onClick={setSelected} />
            </div>
        </section>
    );
}
