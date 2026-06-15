import { useDiceStore } from '../../../store/diceStore'
import { useHistoryStore } from '../../../store/historyStore'
import { useUiStore } from '../../../store/uiStore'
import { executeRoll } from '../../../utils/rollCalculator'

/**
 * Orchestrates a full roll sequence:
 * 1. Collapse panels
 * 2. Animate (Phase 4)
 * 3. Execute roll math
 * 4. Save to history
 * 5. Show result card
 */
export function useDiceRoller() {
  const dice = useDiceStore((s) => s.dice)
  const bonus = useDiceStore((s) => s.bonus)
  const advantageMode = useDiceStore((s) => s.advantageMode)
  const clearBoard = useDiceStore((s) => s.clearBoard)

  const addEntry = useHistoryStore((s) => s.addEntry)

  const { setPhase, collapseBothPanels, restorePanels, isFastMode } = useUiStore()

  const roll = async () => {
    if (dice.filter((d) => !d.isGhost).length === 0) return

    collapseBothPanels()
    setPhase('rolling')

    // Phase 4: trigger 3D animation here, await its completion
    if (!isFastMode) {
      await new Promise((res) => setTimeout(res, 2500))
    }

    const result = executeRoll(dice, bonus, advantageMode)
    addEntry(result)
    setPhase('result')
  }

  const repeat = () => {
    // Re-roll without clearing the board config
    roll()
  }

  const clear = () => {
    clearBoard()
    restorePanels()
    setPhase('idle')
  }

  return { roll, repeat, clear }
}
