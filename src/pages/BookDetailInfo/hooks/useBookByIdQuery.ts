import { useQuery } from '@tanstack/react-query';
import { AxiosBookItemResponse } from '@/pages/BookDetailInfo/types/response.type.ts';
import { AxiosError } from 'axios';
import { BookItem } from '@/pages/BooksPage/types/books.type.ts';
import { axiosInstance } from '@/app/api/apiInstance.ts';
import { Params } from 'react-router-dom';

interface BooksQueryParams {
  params: Readonly<Params<string>>;
}

export const useBookByIdQuery = ({ params }: BooksQueryParams) => {
  const {
    data: book,
    isLoading,
    isError,
  } = useQuery<AxiosBookItemResponse, AxiosError, BookItem>({
    queryKey: ['book', params],
    queryFn: async () => await axiosInstance.get(`/books/${params.id}`),
    select: (data) => data.data.data,
  });

  return { book, isLoading, isError };
};
