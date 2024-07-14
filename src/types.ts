// Define an interface for the rating object
export interface Rating {
  stars: string;
  count: number;
}

// Define an interface for the product object
export interface Product {
  id: string;
  image: string;
  name: string;
  rating: Rating;
  priceCents: number;
  keywords: string[];
}