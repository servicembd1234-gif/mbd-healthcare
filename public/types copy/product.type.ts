type Product = {
  id?: string;
  name: string;
  partner: Partner;
  badge?: "bestseller" | "top-rated" | "new";
  category: Category;
  image: string;
  desc?: string;
};