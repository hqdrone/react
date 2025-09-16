import { Post, type PostType } from './Post.tsx';

export type PostListType = {
  posts: PostType[];
};

export const PostList = ({ posts }: PostListType) => {
  return (
    <div className="rounded-xl border-1 border-zinc-200 bg-white py-8">
      {posts.map((post: PostType) => (
        <Post title={post.title} body={post.body} key={post.id} />
      ))}
    </div>
  );
};
