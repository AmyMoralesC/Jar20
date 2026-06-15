import { cn } from '../../utils/cn'

interface RedRibbonProps {
  side: 'left' | 'right'
  visible: boolean
}

/**
 * Decorative vertical red ribbon shown on the outer edge of each panel.
 * Fades out when the panel collapses.
 */
export function RedRibbon({ side, visible }: RedRibbonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'absolute top-0 bottom-0 w-3 bg-ribbon transition-opacity duration-300',
        side === 'left' ? 'right-0' : 'left-0',
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none',
      )}
    />
  )
}
