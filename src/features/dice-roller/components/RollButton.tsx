import { useDiceRoller } from '../hooks/useDiceRoller'
import { useDiceStore } from '../../../store/diceStore'
import { useUiStore } from '../../../store/uiStore'

export function RollButton() {
  const { roll } = useDiceRoller()
  const dice = useDiceStore((s) => s.dice)
  const phase = useUiStore((s) => s.phase)

  const canRoll = dice.filter((d) => !d.isGhost).length > 0 && phase === 'idle'

  return (
    <button
      onClick={roll}
      disabled={!canRoll}
      className="
        relative px-8 py-2 font-display text-lg tracking-widest
        bg-wood-dark border-2 border-gold text-gold
        disabled:opacity-40 disabled:cursor-not-allowed
        hover:bg-gold hover:text-wood-darkest
        transition-all duration-200
        group
      "
      aria-label="Lanzar dados"
    >
      {/* Ribbon decoration — Phase 3: animate wave on hover */}
      <span aria-hidden="true" className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-0.5 bg-ribbon group-hover:w-8 transition-all duration-300" />
      <span aria-hidden="true" className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-0.5 bg-ribbon group-hover:w-8 transition-all duration-300" />
      Lanzar
    </button>
  )
}
