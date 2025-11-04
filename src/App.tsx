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
import { useFetching } from './hooks/useFetching.ts';
import { getPagesCount } from './utils/pages.ts';
import { Pagination } from './components/UI/Pagination.tsx';

export type PostKey = 'title' | 'body';

export const App = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [filter, setFilter] = useState<PostFilterType>({ sort: '', query: '' });
  const [modalOpen, setModalOpen] = useState(false);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, postsLoading, postsError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
    setPosts(response.data);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [page]);

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
          loading={postsLoading}
          posts={sortedAndSearchedPosts}
          error={postsError}
        />
        <Pagination page={page} totalPages={totalPages} setPage={(p) => setPage(p)} />
      </main>
    </div>
  );
};
