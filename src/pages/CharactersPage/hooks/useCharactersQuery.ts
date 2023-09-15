import { useQuery } from '@tanstack/react-query';
import { AxiosResponse, GlobalResponse } from '@/app/types/response.type.ts';
import { CharacterItem } from '@/pages/CharactersPage/types/characters.type.ts';
import { AxiosError } from 'axios';
import { axiosInstance } from '@/app/api/apiInstance.ts';

interface UseCharactersQueryProps {
  page: number;
  debouncedSearch: string;
}

const useCharactersQuery = ({
  page,
  debouncedSearch,
}: UseCharactersQueryProps) => {
  const {
    data: characters,
    isLoading,
    isError,
  } = useQuery<
    AxiosResponse<CharacterItem>,
    AxiosError,
    GlobalResponse<CharacterItem>
  >({
    queryKey: ['characters', page, debouncedSearch],
    queryFn: async () =>
      await axiosInstance.get(
        `/characters?page[number=${
          debouncedSearch ? 1 : page
        }]&page[size=12]&filter[name_cont_any]=${debouncedSearch}`,
      ),
    select: (data) => data.data,
  });

  return { characters, isLoading, isError };
};

export default useCharactersQuery;
