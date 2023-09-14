import { useParams } from 'react-router-dom';
import { LoaderPerPage } from '@/components/ui/Loader/Loader.tsx';
import ErrorBlock from '@/components/ui/ErrorBlock.tsx';
import BookContent from '@/pages/BookDetailInfo/ui/BookContent.tsx';
import { useBookByIdQuery } from '@/pages/BookDetailInfo/hooks/useBookByIdQuery.ts';
import { useChaptersQuery } from '@/pages/BookDetailInfo/hooks/useChaptersQuery.ts';

const BookDetailInfo = () => {
  const params = useParams();

  const { book, isLoading, isError } = useBookByIdQuery({ params: params });
  const { chapters, chaptersIsLoading } = useChaptersQuery({ params: params });

  if (isLoading) return <LoaderPerPage />;
  if (isError) return <ErrorBlock />;

  return (
    book && (
      <BookContent
        book={book}
        chaptersIsLoading={chaptersIsLoading}
        chapters={chapters}
      />
    )
  );
};

export default BookDetailInfo;
