export interface INavItems {
  id: number;
  name: string;
  link: string;
}

export interface BlogDetailsType {
  id: number;
  title: string;
  description: string;
  created_at: string;
  read_time: string;
  tags: string[];
  url: string;
  cover_image: string | null;
  social_image: string;
  body_html?: string;
}
