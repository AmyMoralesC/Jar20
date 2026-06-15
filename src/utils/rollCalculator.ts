import type { DieInstance, RollResult } from '../types/dice'
import { rollDie, calculateTotal } from './diceRules'
import type { AdvantageMode } from '../types/dice'

export function executeRoll(
  dice: DieInstance[],
  bonus: number,
  advantageMode: AdvantageMode,
): RollResult {
  const realDice = dice.filter((d) => !d.isGhost)
  const rolls = realDice.map((d) => ({ type: d.type, result: rollDie(d.type) }))
  const values = rolls.map((r) => r.result)
  const total = calculateTotal(values, bonus, advantageMode)

  return {
    dice: rolls,
    bonus,
    advantageMode,
    total,
    timestamp: Date.now(),
  }
}
