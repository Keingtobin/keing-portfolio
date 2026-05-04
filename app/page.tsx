import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      {/* Hero */}
      <section className="flex flex-col items-center gap-8 rounded-2xl border border-zinc-200 bg-white/70 p-8 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70 sm:flex-row sm:items-start sm:p-10">
        <div className="flex shrink-0 flex-col items-center gap-3">
          <div className="relative size-32 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800 sm:size-40">
            <Image
              src="/profile.JPG"
              alt="Zach Huber"
              fill
              sizes="160px"
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Social links */}
          <div className="flex gap-2">
            <a
              href="https://github.com/Keingtobin/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-200 px-4 py-2 text-center text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-50"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/zach-huber-1333261b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-200 px-4 py-2 text-center text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-50"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-center sm:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Zach Huber
          </h1>
          <p className="max-w-prose text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I am a GIS Developer/Analyst with a passion for constantly learning.
            I have earned a B.A. in Computer Science, B.A. in Geography with a GIS
            Emphasis, Minor in Philosophy, and an Undergraduate Certificate in
            GIS and Computational Science from University of Colorado, Boulder.
            Outside of work I enjoy all things outdoors including hiking, trail running, and skiing.
          </p>
          <p className="max-w-prose text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            This portfolio is meant to show off all of the different projects I have done,
            or the ones that I'm currently working on. It is also going to be a place for me to
            dump all of the different maps I make.            
          </p>
        </div>
      </section>
    </div>
  )
}
