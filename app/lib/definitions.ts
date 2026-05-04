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

export type MapItem = {
  src: string
  alt: string
  // Intrinsic pixel dimensions of the source image — used by next/image
  // to reserve layout space and avoid content-shift while loading.
  width: number
  height: number
}
