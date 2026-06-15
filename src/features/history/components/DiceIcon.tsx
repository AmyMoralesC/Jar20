import type { DieType } from '../../../types/dice'
import { cn } from '../../../utils/cn'

interface DiceIconProps {
  type: DieType
  className?: string
}

/**
 * Inline text icon for each die type.
 * Phase 2: replace with proper 3D-perspective SVG icons.
 */
const DIE_SYMBOLS: Record<DieType, string> = {
  d4: '▲',
  d6: '⬡',
  d8: '◆',
  d10: '⬟',
  d12: '⬠',
  d20: '⬡',
  d100: '%',
}

export function DiceIcon({ type, className }: DiceIconProps) {
  return (
    <span aria-label={type} className={cn('font-mono text-xs', className)}>
      {DIE_SYMBOLS[type]}
    </span>
  )
}
