import React from 'react';
import { Label } from '@/components/ui/label.tsx';
import { Input } from '@/components/ui/input.tsx';

interface SearchInputProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput = ({ search, setSearch }: SearchInputProps) => {
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <>
      <Label htmlFor="search" className="text-lg">
        Search
      </Label>
      <Input
        onChange={handleSearchInput}
        type="search"
        value={search}
        id="search"
        placeholder="e.g. Harry"
        className="focus:text-foreground text-foreground"
      />
    </>
  );
};

export default SearchInput;
