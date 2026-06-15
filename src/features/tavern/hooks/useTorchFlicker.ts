import { useEffect, useRef } from 'react'

/**
 * Returns a ref to attach to a torch element.
 * Drives a subtle CSS custom property --flicker-opacity that
 * the torch component reads for its flame animation.
 * Randomised per instance so each torch flickers independently.
 */
export function useTorchFlicker() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf: number
    const BASE = 0.85
    const AMPLITUDE = 0.15
    const SPEED = 0.003 + Math.random() * 0.002 // slightly different per torch
    let t = Math.random() * Math.PI * 2

    const tick = () => {
      t += SPEED
      const flicker = BASE + Math.sin(t) * AMPLITUDE + Math.sin(t * 2.7) * 0.04
      el.style.setProperty('--flicker-opacity', String(flicker))
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return ref
}
