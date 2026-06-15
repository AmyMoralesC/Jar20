/**
 * Phase 2 component — masks shown above the d20 when advantage is eligible.
 */
import type { AdvantageMode } from '../../../types/dice'

interface AdvantageToggleProps {
  mode: AdvantageMode
  onChange: (mode: AdvantageMode) => void
}

export function AdvantageToggle({ mode, onChange }: AdvantageToggleProps) {
  return (
    <div className="flex gap-3 items-center" role="group" aria-label="Ventaja o desventaja">
      <button
        onClick={() => onChange(mode === 'advantage' ? null : 'advantage')}
        aria-pressed={mode === 'advantage'}
        className={`flex flex-col items-center text-xs transition-colors ${
          mode === 'advantage' ? 'text-adv' : 'text-parchment/50 hover:text-adv/80'
        }`}
      >
        <span className="text-2xl" aria-hidden="true">😊</span>
        Ventaja
      </button>

      <button
        onClick={() => onChange(mode === 'disadvantage' ? null : 'disadvantage')}
        aria-pressed={mode === 'disadvantage'}
        className={`flex flex-col items-center text-xs transition-colors ${
          mode === 'disadvantage' ? 'text-dis' : 'text-parchment/50 hover:text-dis/80'
        }`}
      >
        <span className="text-2xl" aria-hidden="true">😞</span>
        Desventaja
      </button>
    </div>
  )
}
