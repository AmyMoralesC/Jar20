/**
 * Phase 2 component.
 * Golden orb in the center of the board that holds the group bonus when
 * multiple dice are selected.
 */
interface BonusOrbProps {
  bonus: number
  onChange: (value: number) => void
  visible: boolean
}

export function BonusOrb({ bonus, onChange, visible }: BonusOrbProps) {
  if (!visible) return null

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="pointer-events-auto flex flex-col items-center gap-1">
        <div className="w-16 h-16 rounded-full border-2 border-gold bg-wood-dark/80 flex items-center justify-center shadow-[0_0_20px_4px_rgba(212,175,55,0.4)]">
          <input
            type="number"
            value={bonus}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-10 text-center bg-transparent text-gold font-display text-sm focus:outline-none"
            aria-label="Bonificador de tirada"
          />
        </div>
        <span className="text-gold/60 text-[10px] uppercase tracking-widest">Bonif.</span>
      </div>
    </div>
  )
}
