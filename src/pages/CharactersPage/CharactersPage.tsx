import { useState } from 'react';
import { clsx } from 'clsx';
import { LoaderPerPage } from '@/components/ui/Loader/Loader.tsx';
import ErrorBlock from '@/components/ui/ErrorBlock.tsx';
import Pagination from '@/components/Pagination.tsx';
import useDebounce from '@/app/hooks/useDebounce.ts';
import useCharactersQuery from '@/pages/CharactersPage/hooks/useCharactersQuery.ts';
import CharacterCard from '@/pages/CharactersPage/ui/CharacterCard.tsx';
import SearchInput from '@/components/SearchInput.tsx';

const CharactersPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const debouncedSearch = useDebounce(search, 500);

  const { characters, isLoading, isError } = useCharactersQuery({
    page: page,
    debouncedSearch: debouncedSearch,
  });

  if (isLoading) return <LoaderPerPage />;
  if (isError) return <ErrorBlock />;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex w-72 md:w-96 flex-col gap-2">
        <SearchInput search={search} setSearch={setSearch} />
        <Pagination
          page={page}
          setPage={setPage}
          lastPage={characters?.meta.pagination?.last}
          currentPage={characters?.meta.pagination?.current}
        />
      </div>
      <div
        className={clsx(
          'mt-4 gap-4',
          'grid grid-cols-1',
          'md:grid-cols-4 md:space-y-0',
          'sm:grid-cols-2',
        )}
      >
        {characters?.data.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharactersPage;
