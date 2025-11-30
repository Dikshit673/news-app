const CategoryArr = [
  'general',
  'business',
  'entertainment',
  'health',
  'science',
  'sports',
  'technology',
] as const;

export type CategoryType = (typeof CategoryArr)[number];
export default CategoryArr;
