import { Select } from './UI/Select.tsx';
import { Input } from './UI/Input.tsx';

export type PostFilterType = {
  sort: string;
  query: string;
};

export type PostFilterProps = {
  filter: PostFilterType;
  setFilter: (filter: PostFilterType) => void;
};

type SelectOptionType = {
  title: 'Title' | 'Body';
  value: 'title' | 'body';
};

export const PostFilter = ({ filter, setFilter }: PostFilterProps) => {
  const selectOptions: SelectOptionType[] = [
    { title: 'Title', value: 'title' },
    { title: 'Body', value: 'body' },
  ];

  return (
    <div className="mb-8 grid grid-cols-2 gap-2">
      <Input
        placeholder="Search"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <Select
        onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
        value={filter.sort}
        defaultValue="Sort By"
        options={selectOptions}
      />
    </div>
  );
};
