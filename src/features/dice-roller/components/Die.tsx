/**
 * Phase 2 component — a single die on the board.
 * For now renders a placeholder so the board isn't blank.
 */
import type { DieInstance } from '../../../types/dice'
import { cn } from '../../../utils/cn'

interface DieProps {
  die: DieInstance
  onClick: () => void
  onContextMenu: (e: React.MouseEvent) => void
}

export function Die({ die, onClick, onContextMenu }: DieProps) {
  return (
    <button
      onClick={onClick}
      onContextMenu={onContextMenu}
      aria-label={`Dado ${die.type}${die.isSelected ? ' seleccionado' : ''}`}
      style={{
        position: 'absolute',
        left: `${die.position.x}%`,
        top: `${die.position.y}%`,
        transform: 'translate(-50%, -50%)',
      }}
      className={cn(
        'w-14 h-14 rounded border-2 font-display text-sm font-bold transition-all duration-150',
        'bg-wood-dark text-parchment',
        die.isSelected
          ? 'border-gold shadow-[0_0_12px_3px_rgba(212,175,55,0.7)]'
          : 'border-wood-mid hover:border-gold/50',
        die.isGhost && 'opacity-50',
      )}
    >
      {die.type}
      {die.result !== undefined && (
        <span className="block text-gold text-xs">{die.result}</span>
      )}
    </button>
  )
}
