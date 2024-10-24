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
        <section className='pb-16 flex'>
            <PostsGrid posts={filtered} option="simple" />
            <Categories categories={['all', ...categories]} selected={selected} onClick={setSelected} />
        </section>
    );
}
