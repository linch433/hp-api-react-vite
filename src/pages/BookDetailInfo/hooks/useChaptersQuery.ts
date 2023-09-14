import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from '@/app/types/response.type.ts';
import { ChaptersResponse } from '@/pages/BookDetailInfo/types/response.type.ts';
import { AxiosError } from 'axios';
import { axiosInstance } from '@/app/api/apiInstance.ts';
import { Params } from 'react-router-dom';

// interface ChaptersParams {
//   params: Readonly<Params<string>>;
// }

export const useChaptersQuery = ({
  params,
}: {
  params: Readonly<Params<string>>;
}) => {
  const { data: chapters, isLoading: chaptersIsLoading } = useQuery<
    AxiosResponse<ChaptersResponse>,
    AxiosError,
    ChaptersResponse[]
  >({
    queryKey: ['chapters', params],
    queryFn: async () =>
      await axiosInstance.get(`/books/${params.id}/chapters`),
    select: (data) => data.data.data,
  });

  return { chapters, chaptersIsLoading };
};
