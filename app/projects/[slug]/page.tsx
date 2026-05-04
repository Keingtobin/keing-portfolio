import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjectBySlug, projects } from '../../lib/projects'
import ContentRenderer from '../../ui/content-renderer'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  return (
    <article className="flex flex-col gap-6 rounded-2xl border border-zinc-200 bg-white/70 p-8 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70 sm:p-10">
      <Link
        href="/projects"
        className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
      >
        <span aria-hidden="true">←</span>
        Back to projects
      </Link>

      <header className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {project.title}
        </h1>
        <p className="text-lg leading-7 text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
        <p className="text-sm text-zinc-400 dark:text-zinc-600">
          {new Date(project.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <hr className="border-zinc-200 dark:border-zinc-800" />
      </header>

      <ContentRenderer blocks={project.content} />
    </article>
  )
}
