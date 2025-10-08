import { type PostType } from './components/Post.tsx';
import { useMemo, useState } from 'react';
import { PostList } from './components/PostList.tsx';
import { PostForm } from './components/PostForm.tsx';
import { PostFilter } from './components/PostFilter.tsx';
import { type PostFilterType } from './components/PostFilter.tsx';
export type PostKey = 'title' | 'description';

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
  const [filter, setFilter] = useState<PostFilterType>({ sort: '', query: '' });

  const sortedPosts = useMemo(() => {
    if (filter.sort !== '') {
      return [...posts].sort((a, b) =>
        a[filter.sort as PostKey].localeCompare(b[filter.sort as PostKey])
      );
    }
    return posts;
  }, [posts, filter.sort]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(filter.query) ||
        post.description.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const createPost = (post: PostType) => {
    setPosts([...posts, post]);
  };

  const onDeletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="mx-auto max-w-[640px] px-4 pb-32">
      <header className="py-16">
        <h1 className="text-center text-2xl font-bold">React Blog</h1>
      </header>
      <main>
        <PostForm create={createPost} />
        <PostFilter filter={filter} setFilter={setFilter} />
        <PostList onDeletePost={onDeletePost} posts={sortedAndSearchedPosts} />
      </main>
    </div>
  );
};
