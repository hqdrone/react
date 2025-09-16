import { type PostProps, type PostType } from './components/Post.tsx';
import { type FormEvent, useState } from 'react';
import { PostList } from './components/PostList.tsx';
import { Input } from './components/UI/Input.tsx';
import { Button } from './components/UI/Button.tsx';

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

  const [post, setPost] = useState<PostProps>({ title: '', body: '' });

  const addNewPost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: '', body: '' });
  };

  return (
    <div className="mx-auto max-w-[640px] px-4 pb-32">
      <header className="py-16">
        <h1 className="text-center text-2xl font-bold">React Blog</h1>
      </header>
      <main>
        <div className="mb-8 rounded-xl border-1 border-zinc-200 bg-white p-8">
          <form onSubmit={addNewPost} className="flex flex-col gap-2">
            <Input
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              placeholder="Title"
              name="title"
            />
            <Input
              value={post.body}
              onChange={(e) => setPost({ ...post, body: e.target.value })}
              placeholder="Body"
              name="body"
            />
            <Button disabled={!post.title || !post.body}>Add Post</Button>
          </form>
        </div>
        <PostList posts={posts} />
      </main>
    </div>
  );
};
