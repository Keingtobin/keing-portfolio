import { posts } from '../lib/blog'
import BlogCard from '../ui/blog-card'

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-8 rounded-2xl border border-zinc-200 bg-white/70 p-8 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70 sm:p-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Blog
        </h1>
      </div>

      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
