import { cn } from '../../utils/cn'

interface WoodPanelProps {
  children: React.ReactNode
  className?: string
  side?: 'left' | 'right'
}

/**
 * Reusable wooden panel shell.
 * Actual wood texture is applied via CSS background-image (see index.css).
 * Phase 1: solid color fallback with the right token.
 * Phase 5: swap for real wood texture.
 */
export function WoodPanel({ children, className, side }: WoodPanelProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col',
        'bg-wood-dark border-wood-mid',
        side === 'left' && 'border-r-2',
        side === 'right' && 'border-l-2',
        className,
      )}
    >
      {children}
    </div>
  )
}
