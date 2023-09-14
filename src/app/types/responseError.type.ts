interface Error {
  status: string;
  source?: string;
  title: string;
  detail: string;
}

export interface GlobalError {
  errors: Error[];
}
