import { Torch } from './Torch'

/**
 * Full-screen tavern atmosphere layer.
 * Sits behind everything else (z-0).
 *
 * Phase 1: gradient + colour tokens.
 * Phase 5: replace gradient with a real (copyright-free) tavern photo,
 *          keeping the blur overlay so the dice stay readable.
 */
export function TavernBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Base colour gradient imitating warm tavern light */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, #3d2008 0%, #1a0d04 60%, #0d0604 100%)',
        }}
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)',
        }}
      />

      {/* Torches */}
      <Torch className="absolute top-8 left-6 flex flex-col items-center" />
      <Torch className="absolute top-8 right-6 flex flex-col items-center" />

      {/* Warm light pool under torches */}
      <div
        className="absolute top-0 left-6 w-32 h-32 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,140,0,0.12) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-0 right-6 w-32 h-32 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,140,0,0.12) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
