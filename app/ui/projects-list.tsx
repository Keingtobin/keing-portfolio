'use client'

import { useState } from 'react'
import { Project } from '../lib/definitions'
import ProjectCard from './project-card'

const FILTER_TAGS = ['All', 'Analysis', 'Development', 'Other'] as const
type FilterTag = (typeof FILTER_TAGS)[number]

export default function ProjectsList({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<FilterTag>('All')

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(active))

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-2">
        {FILTER_TAGS.map((tag) => {
          const isActive = active === tag
          return (
            <button
              key={tag}
              type="button"
              onClick={() => setActive(tag)}
              className={
                isActive
                  ? 'rounded-full bg-zinc-900 px-4 py-1.5 text-sm font-medium text-white dark:bg-zinc-50 dark:text-zinc-900'
                  : 'rounded-full border border-zinc-300 bg-white/70 px-4 py-1.5 text-sm font-medium text-zinc-700 backdrop-blur transition-colors hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-300 dark:hover:border-zinc-500'
              }
            >
              {tag}
            </button>
          )
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-zinc-600 dark:text-zinc-400">
          No projects in this category yet.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      )}
    </div>
  )
}
