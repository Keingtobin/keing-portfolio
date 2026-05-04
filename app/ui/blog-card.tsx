import Link from 'next/link'
import { BlogPost } from '../lib/definitions'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-xl border border-zinc-200 bg-white/70 p-8 backdrop-blur transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:shadow-zinc-900"
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-xl font-semibold text-zinc-900 group-hover:text-zinc-600 dark:text-zinc-50 dark:group-hover:text-zinc-300">
          {post.title}
        </h2>
        <p className="shrink-0 text-sm text-zinc-400 dark:text-zinc-600">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
      <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-400">
        {post.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}
