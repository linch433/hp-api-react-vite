import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from '@/app/types/response.type.ts';
import { BookItem } from '@/pages/BooksPage/types/books.type.ts';
import { AxiosError } from 'axios';
import { axiosInstance } from '@/app/api/apiInstance.ts';

const useBooksQuery = () => {
  const {
    data: books,
    isLoading,
    isError,
  } = useQuery<AxiosResponse<BookItem>, AxiosError, BookItem[]>({
    queryKey: ['books'],
    queryFn: async () => await axiosInstance.get('/books'),
    select: (data) => data.data.data,
  });

  return { books, isLoading, isError };
};

export default useBooksQuery;
