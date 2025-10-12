import { type PostType } from './components/Post.tsx';
import { useEffect, useState } from 'react';
import { PostList } from './components/PostList.tsx';
import { PostForm } from './components/PostForm.tsx';
import { PostFilter } from './components/PostFilter.tsx';
import { type PostFilterType } from './components/PostFilter.tsx';
import { Modal } from './components/UI/Modal.tsx';
import { Button } from './components/UI/Button.tsx';
import { usePosts } from './hooks/usePosts.ts';
import { PostService } from './API/PostService.ts';
export type PostKey = 'title' | 'body';

export const App = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [filter, setFilter] = useState<PostFilterType>({ sort: '', query: '' });
  const [modalOpen, setModalOpen] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [loadingPosts, setLoadingPosts] = useState(false);
  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setLoadingPosts(true);
    const posts = await PostService.getAll();
    setPosts(posts);
    setLoadingPosts(false);
  }

  const createPost = (post: PostType) => {
    setPosts([...posts, post]);
    setModalOpen(false);
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
        <PostFilter filter={filter} setFilter={setFilter} />
        <div className="mb-4 flex justify-end">
          <Button onClick={() => setModalOpen(true)}>Add Post</Button>
        </div>
        <Modal isOpen={modalOpen} title="Add Post" onClose={() => setModalOpen(false)}>
          <PostForm create={createPost} />
        </Modal>
        <PostList
          onDeletePost={onDeletePost}
          loading={loadingPosts}
          posts={sortedAndSearchedPosts}
        />
      </main>
    </div>
  );
};
