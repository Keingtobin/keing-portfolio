import { Fragment } from 'react'
import Image from 'next/image'
import { ContentBlock } from '../lib/definitions'

// Parses `[label](url)` syntax inside a string into renderable parts.
function renderInline(text: string) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  const parts: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(
        <Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>,
      )
    }
    const [, label, href] = match
    const isExternal = /^https?:\/\//.test(href)
    parts.push(
      <a
        key={key++}
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="font-medium text-zinc-900 underline underline-offset-2 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300"
      >
        {label}
      </a>,
    )
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) {
    parts.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>)
  }
  return parts
}

export default function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'text':
            return (
              <p
                key={i}
                className="leading-7 text-zinc-700 dark:text-zinc-300"
              >
                {renderInline(block.content)}
              </p>
            )

          case 'heading': {
            const Tag = `h${block.level}` as 'h2' | 'h3' | 'h4'
            const sizeClass =
              block.level === 2
                ? 'text-2xl font-semibold'
                : block.level === 3
                  ? 'text-xl font-semibold'
                  : 'text-lg font-medium'
            return (
              <Tag
                key={i}
                className={`${sizeClass} text-zinc-900 dark:text-zinc-50`}
              >
                {block.content}
              </Tag>
            )
          }

          case 'code':
            return (
              <div key={i} className="overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-100 px-4 py-2 dark:border-zinc-800 dark:bg-zinc-900">
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    {block.language}
                  </span>
                </div>
                <pre className="overflow-x-auto bg-zinc-50 p-4 text-sm dark:bg-zinc-950">
                  <code className="font-mono text-zinc-800 dark:text-zinc-200">
                    {block.content}
                  </code>
                </pre>
              </div>
            )

          case 'image':
            return (
              <figure key={i} className="space-y-2">
                <div className="relative overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    width={800}
                    height={450}
                    className="w-full object-cover"
                  />
                </div>
                {block.caption && (
                  <figcaption className="text-center text-sm text-zinc-500 dark:text-zinc-400">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            )
        }
      })}
    </div>
  )
}
