import { BlogPost } from './definitions'

export const posts: BlogPost[] = [
  {
    slug: 'example-post',
    title: 'Example Blog Post',
    description:
      'A short summary of what this post covers. This appears in the blog listing.',
    date: '2026-03-20',
    tags: ['General', 'Learning'],
    content: [
      {
        type: 'text',
        content:
          'This is an example blog post. Replace this with your actual writing.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'A Section Heading',
      },
      {
        type: 'text',
        content:
          'You can include multiple sections, code blocks, and images in each post.',
      },
      {
        type: 'code',
        language: 'bash',
        content: `npx create-next-app@latest my-app`,
      },
    ],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug)
}
