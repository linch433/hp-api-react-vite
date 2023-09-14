import { BookItem } from '@/pages/BooksPage/types/books.type.ts';
import { Links, Meta } from '@/app/types/response.type.ts';

export interface AxiosBookItemResponse {
  status: number;
  statusText: string;
  data: {
    data: BookItem;
    meta: Meta;
    links: Links;
  };
}

export interface ChapterAttributes {
  slug: string;
  title: string;
  summary: string;
  order: number;
}

interface ChapterRelationships {
  book: {
    data: {
      id: string;
      type: string;
    };
  };
}

export interface ChaptersResponse {
  id: string;
  type: string;
  attributes: ChapterAttributes;
  relationships: ChapterRelationships;
}
