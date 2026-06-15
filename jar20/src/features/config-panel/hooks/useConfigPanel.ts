import { useDiceStore } from '../../../store/diceStore'
import { canAddDie } from '../../../utils/diceRules'
import type { DieType } from '../../../types/dice'
import { DIE_TYPES, MAX_DICE } from '../../../types/dice'

export function useConfigPanel() {
  const dice = useDiceStore((s) => s.dice)
  const addDie = useDiceStore((s) => s.addDie)

  const totalDice = dice.filter((d) => !d.isGhost).length
  const canAdd = canAddDie(totalDice)

  const countByType = DIE_TYPES.reduce<Record<DieType, number>>((acc, t) => {
    acc[t] = dice.filter((d) => d.type === t && !d.isGhost).length
    return acc
  }, {} as Record<DieType, number>)

  const handleAdd = (type: DieType) => {
    if (!canAdd) return
    addDie(type)
  }

  return { countByType, totalDice, maxDice: MAX_DICE, canAdd, handleAdd }
}
