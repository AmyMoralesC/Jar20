import { InfoModal } from './InfoModal'
import { useUiStore } from '../../../store/uiStore'

/**
 * Top header bar: logo left, fast-mode toggle + mute + info right.
 * Kept deliberately slim so it doesn't compete with the dice board.
 */
export function TavernHeader() {
  const { isMuted, isFastMode, toggleMute, toggleFastMode } = useUiStore()

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-wood-darkest border-b border-wood-mid">
      {/* Logo */}
      <div className="flex items-center gap-2">
        {/* Placeholder — swap for SVG logo in Phase 1 */}
        <span className="text-2xl" aria-hidden="true">🍺</span>
        <span className="font-display text-xl text-gold tracking-widest">Jar20</span>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleFastMode}
          aria-pressed={isFastMode}
          className="text-xs text-parchment/70 hover:text-parchment border border-parchment/30 px-2 py-1 rounded transition-colors"
          title="Modo Rápido: salta animaciones"
        >
          {isFastMode ? '⚡ Rápido' : '🎲 Normal'}
        </button>

        <button
          onClick={toggleMute}
          aria-pressed={isMuted}
          aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
          className="text-parchment/70 hover:text-parchment text-lg transition-colors"
        >
          {isMuted ? '🔇' : '🔊'}
        </button>

        <InfoModal />
      </div>
    </div>
  )
}
