export interface IPost {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  content: string;
  image: string;
  average_reading_time: number;
  slug: string;
}
