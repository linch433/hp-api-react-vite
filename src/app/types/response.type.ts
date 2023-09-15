interface Pagination {
  current: number;
  next?: number;
  last?: number;
  records: number;
}

export interface Meta {
  pagination?: Pagination;
  copyright: string;
  generated_at: string;
}

export interface Links {
  self: string;
  current: string;
}

export interface GlobalResponse<T> {
  data: T[];
  meta: Meta;
  links: Links;
}

export interface AxiosResponse<T> {
  status: number;
  statusText: string;
  data: GlobalResponse<T>;
}
