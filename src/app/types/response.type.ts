interface Pagination {
  current: number;
  records: number;
}

interface Meta {
  pagination: Pagination;
  copyright: string;
  generated_at: string;
}

interface Links {
  self: string;
  current: string;
}

interface GlobalResponse<T> {
  data: T[];
  meta: Meta;
  links: Links;
}

export interface AxiosResponse<T> {
  status: number;
  statusText: string;
  data: GlobalResponse<T>;
}