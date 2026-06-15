import { useTorchFlicker } from '../hooks/useTorchFlicker'

interface TorchProps {
  className?: string
}

/**
 * Decorative torch with a flickering flame.
 * The flame opacity is driven by useTorchFlicker via a CSS custom property.
 * Phase 1: pure CSS/SVG flame. Phase 5: swap for a richer particle effect.
 */
export function Torch({ className }: TorchProps) {
  const ref = useTorchFlicker()

  return (
    <div
      ref={ref}
      className={className}
      aria-hidden="true"
      style={{ '--flicker-opacity': '1' } as React.CSSProperties}
    >
      {/* Torch handle */}
      <div className="w-2 h-10 bg-wood-mid mx-auto rounded-sm" />
      {/* Flame glow */}
      <div
        className="w-5 h-7 mx-auto -mt-1 rounded-full"
        style={{
          opacity: 'var(--flicker-opacity)',
          background: 'radial-gradient(ellipse at 50% 70%, #ff8c00, #ff4500, transparent)',
          filter: 'blur(2px)',
        }}
      />
    </div>
  )
}
