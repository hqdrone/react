import { Post, type PostType } from './Post.tsx';

export type PostListType = {
  posts: PostType[];
};

export type PostListProps = PostListType & {
  onDeletePost: (id: number) => void;
};

export const PostList = ({ posts, onDeletePost }: PostListProps) => {
  return (
    <div className="rounded-xl border-1 border-zinc-200 bg-white py-8">
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
        <div className="p-8 text-center font-light text-zinc-300">Posts not found</div>
      )}
    </div>
  );
};
