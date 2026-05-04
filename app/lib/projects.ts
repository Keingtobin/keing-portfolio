import { Project } from './definitions'

export const projects: Project[] = [
  {
    slug: 'example-project',
    title: 'Example Project',
    description: 'A short description of what this project does and why it matters.',
    date: '2026-03-15',
    tags: ['Development', 'TypeScript', 'Next.js', 'Tailwind'],
    content: [
      {
        type: 'text',
        content:
          'This is an example project entry. Replace this with a real description of your project.',
      },
      {
        type: 'heading',
        level: 2,
        content: 'How It Works',
      },
      {
        type: 'text',
        content:
          'Explain the approach, architecture, or interesting technical decisions here.',
      },
      {
        type: 'code',
        language: 'typescript',
        content: `function greet(name: string): string {
  return \`Hello, \${name}!\`
}

console.log(greet('World'))`,
      },
    ],
  },
  {
    slug: 'closure-exposure',
    title: 'Closure Exposure Dashboard',
    description: 'A web app used to visualize speed and weather data on the I70 mountain corridor',
    date: '2026-04-30',
    tags: ['Analysis', 'Development', 'Mapbox GL', 'React', 'Python', 'ArcGIS Pro'],
    content: [
      {
        type: 'heading',
        level: 2,
        content:''
      },
    ]
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
