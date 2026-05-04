import Link from 'next/link'
import { Project } from '../lib/definitions'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-xl border border-zinc-200 bg-white/70 p-6 backdrop-blur transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:shadow-zinc-900"
    >
      <div className="flex flex-1 flex-col gap-3">
        <h2 className="text-lg font-semibold text-zinc-900 group-hover:text-zinc-600 dark:text-zinc-50 dark:group-hover:text-zinc-300">
          {project.title}
        </h2>
        <p className="flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <p className="mt-4 text-xs text-zinc-400 dark:text-zinc-600">
        {new Date(project.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
    </Link>
  )
}
