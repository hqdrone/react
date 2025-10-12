import { Post, type PostType } from './Post.tsx';
import { AnimatePresence } from 'motion/react';

export type PostListType = {
  posts: PostType[];
};

export type PostListProps = PostListType & {
  onDeletePost: (id: number) => void;
  loading: boolean;
};

export const PostList = ({ posts, onDeletePost, loading }: PostListProps) => {
  return (
    <div className="rounded-xl border-1 border-zinc-200 bg-white py-8">
      <AnimatePresence>
        {posts.length > 0 ? (
          posts.map((post: PostType) => (
            <Post
              onDeletePost={onDeletePost}
              id={post.id}
              title={post.title}
              body={post.body}
              key={post.id}
            />
          ))
        ) : (
          <div className="p-8 text-center font-light text-zinc-300">
            {loading ? 'Loading...' : 'Posts not found'}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
