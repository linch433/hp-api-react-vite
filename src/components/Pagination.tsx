import React from 'react';
import { Button } from '@/components/ui/button.tsx';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  lastPage?: number;
  currentPage?: number;
}

const Pagination = ({
  page,
  setPage,
  lastPage,
  currentPage,
}: PaginationProps) => {
  const handleIncrementCountPage = () => {
    setPage((prev) => prev + 1);
  };

  const handleDecrementCountPage = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="flex flex-row gap-2">
        <Button onClick={handleDecrementCountPage} disabled={page === 1}>
          <BiSolidLeftArrow />
        </Button>
        <Button
          onClick={handleIncrementCountPage}
          disabled={page === lastPage || !lastPage}
        >
          <BiSolidRightArrow />
        </Button>
      </div>
      <p>{lastPage && currentPage + '/' + lastPage}</p>
    </div>
  );
};

export default Pagination;
