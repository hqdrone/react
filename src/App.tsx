import { type PostType } from './components/Post.tsx';
import { useState } from 'react';
import { PostList } from './components/PostList.tsx';
import { PostForm } from './components/PostForm.tsx';
import { Select } from './components/UI/Select.tsx';

export type PostKeys = 'title' | 'description';

export const App = () => {
  const [posts, setPosts] = useState<PostType[]>([
    {
      id: 1,
      title: 'Understanding React Hooks',
      description: 'An introduction to useState, useEffect, and other hooks in React.',
    },
    {
      id: 2,
      title: 'React Component Lifecycle',
      description: 'Exploring the lifecycle methods and their equivalents in function components.',
    },
    {
      id: 3,
      title: 'TypeScript with React',
      description: 'How to use TypeScript effectively with React to catch bugs early.',
    },
    {
      id: 4,
      title: 'Managing State in React',
      description:
        'Overview of different state management approaches including Redux and Context API.',
    },
    {
      id: 5,
      title: 'React Performance Optimization',
      description: 'Tips and best practices to make React apps faster and more efficient.',
    },
  ]);
  const [sortBy, setSortBy] = useState<string>('');

  const createPost = (post: PostType) => {
    setPosts([...posts, post]);
  };

  const onDeletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const onChangeSortBy = (value: PostKeys) => {
    setSortBy(value);
    setPosts(posts.sort((a, b) => a[value].localeCompare(b[value])));
  };

  return (
    <div className="mx-auto max-w-[640px] px-4 pb-32">
      <header className="py-16">
        <h1 className="text-center text-2xl font-bold">React Blog</h1>
      </header>
      <main>
        <PostForm create={createPost} />
        <div className="mb-8">
          <Select
            onChange={onChangeSortBy}
            value={sortBy}
            defaultValue="Sort By"
            options={[
              { title: 'Title', value: 'title' },
              { title: 'Description', value: 'description' },
            ]}
          />
        </div>

        <PostList onDeletePost={onDeletePost} posts={posts} />
      </main>
    </div>
  );
};
