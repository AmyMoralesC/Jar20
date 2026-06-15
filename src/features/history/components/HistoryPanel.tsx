import { useHistory } from '../hooks/useHistory'
import { HistoryEntry } from './HistoryEntry'
import { useUiStore } from '../../../store/uiStore'

export function HistoryPanel() {
  const { entries, clearHistory } = useHistory()
  const toggleHistory = useUiStore((s) => s.toggleHistory)

  return (
    <div className="flex flex-col h-full">
      {/* Sticky header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-wood-mid shrink-0">
        <h2 className="text-gold font-display text-sm tracking-wide">Historial</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={clearHistory}
            aria-label="Limpiar historial"
            className="text-parchment/50 hover:text-dis transition-colors text-base"
            title="Limpiar historial"
          >
            🗑
          </button>
          <button
            onClick={toggleHistory}
            aria-label="Cerrar historial"
            className="text-parchment/50 hover:text-parchment transition-colors text-base font-bold"
          >
            ‹
          </button>
        </div>
      </div>

      {/* Scrollable list */}
      <div className="flex-1 overflow-y-auto px-3 py-1">
        {entries.length === 0 ? (
          <p className="text-parchment/30 text-xs text-center mt-8">
            Sin tiradas todavía.<br />¡Lanza tus primeros dados!
          </p>
        ) : (
          <ul>
            {entries.map((entry) => (
              <HistoryEntry key={entry.id} entry={entry} />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
