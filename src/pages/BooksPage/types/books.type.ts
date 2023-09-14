interface ChapterData {
  id: string;
  type: string;
}

interface BookRelationships {
  chapters: {
    data: ChapterData[];
  };
}

interface BookAttributes {
  slug: string;
  title: string;
  summary: string;
  author: string;
  release_date: string;
  dedication: string;
  pages: number;
  order: number;
  cover: string;
  wiki: string;
}

export interface BookItem {
  id: string;
  type: string;
  attributes: BookAttributes;
  relationships: BookRelationships;
}
