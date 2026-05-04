import { maps } from '../lib/maps'
import MapsGallery from '../ui/maps-gallery'

export default function MapsPage() {
  return (
    <div className="flex flex-col gap-8 rounded-2xl border border-zinc-200 bg-white/70 p-8 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70 sm:p-10">
      <MapsGallery maps={maps} />
    </div>
  )
}
