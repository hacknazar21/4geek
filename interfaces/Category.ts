export interface ICategory {
  id: number;
  children: ICategory[];
  depth: number;
  numchild: number;
  name: string;
  description: string;
  meta_title: string;
  meta_description: string;
  image: string;
  is_public: boolean;
  ancestors_are_public: boolean;
  lookup_slug: string;
  parent: {
    id: number;
    lookup_slug: string;
    name: string;
  };
}
