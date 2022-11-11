export type BookId = 'id';

export interface Book {
  id: number;
  author: string;
  description: string;
  favorite: boolean;
  posterImgPath: string;
  title: string;
}
