'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { MapItem } from '../lib/definitions'
import MapCard from './map-card'

export default function MapsGallery({ maps }: { maps: MapItem[] }) {
  const [selected, setSelected] = useState<MapItem | null>(null)

  // Lock body scroll and listen for Escape while a map is open.
  useEffect(() => {
    if (!selected) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <>
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {maps.map((map) => (
          <MapCard
            key={map.src}
            map={map}
            onClick={() => setSelected(map)}
          />
        ))}
      </div>

      {selected &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-6"
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close enlarged image"
              className="absolute left-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-white transition-colors hover:bg-white/20"
            >
              ×
            </button>
            <Image
              src={selected.src}
              alt={selected.alt}
              width={selected.width}
              height={selected.height}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] max-w-full cursor-default object-contain"
              sizes="100vw"
              priority
            />
          </div>,
          document.body,
        )}
    </>
  )
}
