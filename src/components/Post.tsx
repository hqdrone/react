import { motion } from 'motion/react';

export type PostType = {
  id: number;
  title: string;
  body: string;
};

export type PostProps = PostType & {
  onDeletePost: (id: number) => void;
};

export const Post = ({ id, title, body, onDeletePost }: PostProps) => {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      className="group relative overflow-hidden p-8 hover:bg-zinc-50"
    >
      <div className="mb-2 pr-16 text-xl">
        <span className="text-4xl font-black text-gray-100">{id}.</span> {title}
      </div>
      <div className="font-light text-zinc-400">{body}</div>
      <button
        onClick={() => onDeletePost(id)}
        className="absolute top-8 right-8 hidden cursor-pointer text-xs font-light text-red-400 group-hover:block"
      >
        Delete
      </button>
    </motion.div>
  );
};
