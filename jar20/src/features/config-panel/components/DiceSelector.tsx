import { DIE_TYPES } from '../../../types/dice'
import type { DieType } from '../../../types/dice'
import { cn } from '../../../utils/cn'

interface DiceSelectorProps {
  countByType: Record<DieType, number>
  canAdd: boolean
  onAdd: (type: DieType) => void
  onRemove: (type: DieType) => void
}

/**
 * List of die types with +/- controls.
 * Phase 1: text labels. Phase 2: replace labels with 3D die SVG icons.
 */
export function DiceSelector({ countByType, canAdd, onAdd, onRemove }: DiceSelectorProps) {
  return (
    <ul className="flex flex-col gap-1 px-3">
      {DIE_TYPES.map((type) => (
        <li key={type} className="flex items-center justify-between py-1 border-b border-wood-mid/30 last:border-0">
          <span className="text-parchment text-sm font-display tracking-wide">{type}</span>

          <div className="flex items-center gap-2">
            {/* Remove one */}
            <button
              onClick={() => onRemove(type)}
              disabled={countByType[type] === 0}
              aria-label={`Quitar un ${type}`}
              className={cn(
                'w-5 h-5 rounded flex items-center justify-center text-sm font-bold transition-colors',
                countByType[type] > 0
                  ? 'text-dis hover:bg-dis/20'
                  : 'text-parchment/20 cursor-not-allowed',
              )}
            >
              –
            </button>

            {/* Count badge */}
            <span className="text-gold font-display text-sm w-4 text-center">
              {countByType[type] || '·'}
            </span>

            {/* Add one */}
            <button
              onClick={() => onAdd(type)}
              disabled={!canAdd}
              aria-label={`Agregar un ${type}`}
              className={cn(
                'w-5 h-5 rounded flex items-center justify-center text-sm font-bold transition-colors',
                canAdd
                  ? 'text-adv hover:bg-adv/20'
                  : 'text-parchment/20 cursor-not-allowed',
              )}
            >
              +
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}
