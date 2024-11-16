export interface Menu {
  id: string;
  name: string;
  picture: string;
  price: number;
  category: string;
  tags: string[];
  comment: string;
}

export interface Category {
  category: string;
  filter: boolean;
}
