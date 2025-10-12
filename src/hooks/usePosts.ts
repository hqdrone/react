import { useMemo } from 'react';
import type { PostKey } from '../App.tsx';
import type { PostType } from '../components/Post.tsx';

export const useSortedPosts = (posts: PostType[], sort: string) => {
  return useMemo(() => {
    if (sort !== '') {
      return [...posts].sort((a, b) => a[sort as PostKey].localeCompare(b[sort as PostKey]));
    }
    return posts;
  }, [posts, sort]);
};

export const usePosts = (posts: PostType[], sort: string, query: string) => {
  const sortedPosts = useSortedPosts(posts, sort);
  return useMemo(() => {
    return sortedPosts.filter(
      (post: PostType) =>
        post.title.toLowerCase().includes(query) || post.description.toLowerCase().includes(query)
    );
  }, [query, sortedPosts]);
};
