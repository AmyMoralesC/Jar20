import type { DieType, DieInstance, AdvantageMode } from '../types/dice'
import { MAX_DICE } from '../types/dice'

/**
 * D&D rule: selecting d100 auto-adds a d10 (percentile dice).
 */
export function applyD100Rule(dice: DieInstance[]): DieInstance[] {
  // placeholder — full implementation in Phase 2
  return dice
}

/**
 * Returns whether a second die can be added given current count.
 */
export function canAddDie(currentCount: number): boolean {
  return currentCount < MAX_DICE
}

/**
 * D20 advantage/disadvantage is only available when there is exactly one d20
 * in the pool (not counting the ghost die).
 */
export function isAdvantageEligible(dice: DieInstance[]): boolean {
  const realD20s = dice.filter((d) => d.type === 'd20' && !d.isGhost)
  return realD20s.length === 1
}

/**
 * Roll a single die: returns a number in [1, faces].
 */
export function rollDie(type: DieType): number {
  const faces: Record<DieType, number> = {
    d4: 4,
    d6: 6,
    d8: 8,
    d10: 10,
    d12: 12,
    d20: 20,
    d100: 100,
  }
  return Math.floor(Math.random() * faces[type]) + 1
}

/**
 * Calculate the final total applying bonus and advantage/disadvantage.
 */
export function calculateTotal(
  rolls: number[],
  bonus: number,
  advantageMode: AdvantageMode,
): number {
  if (advantageMode && rolls.length === 2) {
    const chosen =
      advantageMode === 'advantage' ? Math.max(...rolls) : Math.min(...rolls)
    return chosen + bonus
  }
  return rolls.reduce((a, b) => a + b, 0) + bonus
}
