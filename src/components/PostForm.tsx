import { Input } from './UI/Input.tsx';
import { Button } from './UI/Button.tsx';
import { type FormEvent, useState } from 'react';
import type { PostType } from './Post.tsx';

export type PostFormType = {
  create: (post: PostType) => void;
};

export type PostFormData = Omit<PostType, 'id'>;

export const PostForm = ({ create }: PostFormType) => {
  const [post, setPost] = useState<PostFormData>({ title: '', body: '' });

  const addNewPost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: '', body: '' });
  };

  return (
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
  );
};
