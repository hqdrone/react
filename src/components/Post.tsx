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
    <div className="group relative p-8 hover:bg-zinc-50">
      <div className="mb-2 text-xl">{title}</div>
      <div className="font-light text-zinc-400">{body}</div>
      <button
        onClick={() => onDeletePost(id)}
        className="absolute top-8 right-8 hidden cursor-pointer text-xs font-light text-red-400 group-hover:block"
      >
        Delete
      </button>
    </div>
  );
};
