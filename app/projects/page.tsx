import { projects } from '../lib/projects'
import ProjectsList from '../ui/projects-list'

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8 rounded-2xl border border-zinc-200 bg-white/70 p-8 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70 sm:p-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Projects
        </h1>
      </div>

      <ProjectsList projects={projects} />
    </div>
  )
}
