export type PostType = {
  id: number;
  title: string;
  body: string;
};

export type PostProps = Omit<PostType, 'id'>;

export const Post = ({ title, body }: PostProps) => {
  return (
    <div className="p-8">
      <div className="mb-2 text-xl">{title}</div>
      <div className="font-light text-zinc-400">{body}</div>
    </div>
  );
};
