import { useHistoryStore } from '../../../store/historyStore'
import { useDiceRoller } from '../hooks/useDiceRoller'
import { useUiStore } from '../../../store/uiStore'

/**
 * Shown after rolling. Displays the final total with decorative accents.
 * Phase 3: add sparkles + arrow animations.
 */
export function ResultCard() {
  const phase = useUiStore((s) => s.phase)
  const latest = useHistoryStore((s) => s.entries[0])
  const { repeat, clear } = useDiceRoller()

  if (phase !== 'result' || !latest) return null

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 pointer-events-none">
      {/* Result banner */}
      <div className="pointer-events-auto flex flex-col items-center border-2 border-gold bg-wood-darkest/90 px-10 py-5 rounded-sm shadow-[0_0_30px_4px_rgba(212,175,55,0.3)]">
        <p className="text-parchment/60 text-sm uppercase tracking-widest mb-1">Sacaste</p>
        <p className="font-display text-6xl text-gold">{latest.total}</p>
      </div>

      {/* Actions */}
      <div className="pointer-events-auto flex gap-3">
        <button
          onClick={repeat}
          aria-label="Repetir tirada"
          className="px-4 py-2 border border-gold/60 text-gold/60 hover:border-gold hover:text-gold text-sm font-display transition-colors"
        >
          ↻ Repetir
        </button>
        <button
          onClick={clear}
          className="px-4 py-2 border border-parchment/40 text-parchment/60 hover:border-parchment hover:text-parchment text-sm font-display transition-colors"
        >
          Limpiar
        </button>
      </div>
    </div>
  )
}
