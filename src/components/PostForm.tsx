import { Input } from './UI/Input.tsx';
import { Button } from './UI/Button.tsx';
import { type FormEvent, useState } from 'react';
import type { PostType } from './Post.tsx';

export type PostFormType = {
  create: (post: PostType) => void;
};

export type PostFormData = Omit<PostType, 'id'>;

export const PostForm = ({ create }: PostFormType) => {
  const [post, setPost] = useState<PostFormData>({ title: '', description: '' });

  const addNewPost = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: '', description: '' });
  };

  return (
    <div className="rounded-xl border-zinc-200 bg-white">
      <form onSubmit={addNewPost} className="flex flex-col gap-2">
        <Input
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          placeholder="Title"
          name="title"
        />
        <Input
          value={post.description}
          onChange={(e) => setPost({ ...post, description: e.target.value })}
          placeholder="Body"
          name="body"
        />
        <Button disabled={!post.title || !post.description}>Add Post</Button>
      </form>
    </div>
  );
};
