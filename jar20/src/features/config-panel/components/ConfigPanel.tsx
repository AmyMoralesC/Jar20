import { useConfigPanel } from '../hooks/useConfigPanel'
import { DiceCounter } from './DiceCounter'
import { DiceSelector } from './DiceSelector'
import { useUiStore } from '../../../store/uiStore'
import { useDiceStore } from '../../../store/diceStore'

export function ConfigPanel() {
  const { countByType, totalDice, maxDice, canAdd, handleAdd } = useConfigPanel()
  const toggleConfig = useUiStore((s) => s.toggleConfig)
  const removeDieByType = useDiceStore((s) => s.removeDie)
  const dice = useDiceStore((s) => s.dice)

  // Remove the last die of a given type
  const handleRemove = (type: import('../../../types/dice').DieType) => {
    const last = [...dice].reverse().find((d) => d.type === type && !d.isGhost)
    if (last) removeDieByType(last.id)
  }

  return (
    <div className="flex flex-col h-full">
      {/* Sticky header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-wood-mid shrink-0">
        <button
          onClick={toggleConfig}
          aria-label="Cerrar configuración"
          className="text-parchment/50 hover:text-parchment transition-colors text-base font-bold"
        >
          ›
        </button>
        <h2 className="text-gold font-display text-sm tracking-wide">Config. Dados</h2>
      </div>

      {/* Counter */}
      <div className="px-3 pt-3 shrink-0">
        <DiceCounter total={totalDice} max={maxDice} />
      </div>

      {/* Selector list — scrollable if needed */}
      <div className="flex-1 overflow-y-auto py-1">
        <DiceSelector
          countByType={countByType}
          canAdd={canAdd}
          onAdd={handleAdd}
          onRemove={handleRemove}
        />
      </div>
    </div>
  )
}
