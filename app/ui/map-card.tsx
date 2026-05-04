'use client'

import Image from 'next/image'
import { MapItem } from '../lib/definitions'

export default function MapCard({
  map,
  onClick,
}: {
  map: MapItem
  onClick?: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mb-6 block w-full cursor-zoom-in break-inside-avoid"
      aria-label={`Enlarge ${map.alt}`}
    >
      <Image
        src={map.src}
        alt={map.alt}
        width={map.width}
        height={map.height}
        className="block h-auto w-full rounded-lg"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
    </button>
  )
}
