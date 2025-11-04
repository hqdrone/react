import { Button } from './Button.tsx';
import { usePagination } from '../../hooks/usePagination.ts';

interface PaginationProps {
  page: number;
  totalPages: number;
  setPage: (p: number) => void;
}

export const Pagination = ({ totalPages, setPage, page }: PaginationProps) => {
  const pages = usePagination(totalPages);
  return (
    <div className="mt-8 flex flex-wrap gap-2">
      {pages.map((p) => (
        <Button
          key={p}
          onClick={() => setPage(p)}
          className={p === page ? '' : 'border-zinc-200 !bg-white !text-black'}
        >
          {p}
        </Button>
      ))}
    </div>
  );
};
