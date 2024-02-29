export interface CustomGPTResponse<T> {
  data: T;
  status: 'error' | 'success';
}

export interface CustomGPTError {
  message: string;
  code: number;
}
