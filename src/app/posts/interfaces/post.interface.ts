export interface Post {
  id:           string;
  created_time: string;
  author:       Author;
  body:         string;
  images:       string[];
}

export interface Author {
  id:         string;
  name:       string;
  avatar_url: string;
}
