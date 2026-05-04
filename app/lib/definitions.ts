export type ContentBlock =
  | { type: 'text'; content: string }
  | { type: 'heading'; level: 2 | 3 | 4; content: string }
  | { type: 'code'; language: string; content: string }
  | { type: 'image'; src: string; alt: string; caption?: string }

export type Project = {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  coverImage?: string
  content: ContentBlock[]
}

export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  content: ContentBlock[]
}
