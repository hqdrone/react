import { type PostType } from './components/Post.tsx';
import { useState } from 'react';
import { PostList } from './components/PostList.tsx';
import { PostForm } from './components/PostForm.tsx';

export const App = () => {
  const [posts, setPosts] = useState<PostType[]>([
    {
      id: 1,
      title: 'Understanding React Hooks',
      body: 'An introduction to useState, useEffect, and other hooks in React.',
    },
    {
      id: 2,
      title: 'React Component Lifecycle',
      body: 'Exploring the lifecycle methods and their equivalents in function components.',
    },
    {
      id: 3,
      title: 'TypeScript with React',
      body: 'How to use TypeScript effectively with React to catch bugs early.',
    },
    {
      id: 4,
      title: 'Managing State in React',
      body: 'Overview of different state management approaches including Redux and Context API.',
    },
    {
      id: 5,
      title: 'React Performance Optimization',
      body: 'Tips and best practices to make React apps faster and more efficient.',
    },
  ]);

  const createPost = (post: PostType) => {
    setPosts([...posts, post]);
  };

  return (
    <div className="mx-auto max-w-[640px] px-4 pb-32">
      <header className="py-16">
        <h1 className="text-center text-2xl font-bold">React Blog</h1>
      </header>
      <main>
        <PostForm create={createPost} />
        <PostList posts={posts} />
      </main>
    </div>
  );
};
