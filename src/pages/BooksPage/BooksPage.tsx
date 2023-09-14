import { LoaderPerPage } from '@/components/ui/Loader/Loader.tsx';
import ErrorBlock from '@/components/ui/ErrorBlock.tsx';
import BookCard from '@/pages/BooksPage/ui/BookCard.tsx';
import useBooksQuery from '@/pages/BooksPage/hooks/useBooksQuery.ts';

const BooksPage = () => {
  const { books, isError, isLoading } = useBooksQuery();

  if (isLoading) return <LoaderPerPage />;

  if (isError) return <ErrorBlock />;

  return (
    <div className="flex flex-col gap-4">
      {books?.map((book) => <BookCard key={book.id} book={book} />)}
    </div>
  );
};

export default BooksPage;
