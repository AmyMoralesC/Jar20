export type DieType = 'd4' | 'd6' | 'd8' | 'd10' | 'd12' | 'd20' | 'd100'

export type AdvantageMode = 'advantage' | 'disadvantage' | null

export interface DieInstance {
  id: string
  type: DieType
  isSelected: boolean
  isGhost: boolean // the opaque adv/dis second d20
  position: { x: number; y: number }
  rotation: { x: number; y: number; z: number }
  result?: number
}

export interface RollConfig {
  dice: DieInstance[]
  bonus: number
  advantageMode: AdvantageMode
}

export interface RollResult {
  dice: Array<{ type: DieType; result: number }>
  bonus: number
  advantageMode: AdvantageMode
  total: number
  timestamp: number // Date.now()
}

export const DIE_TYPES: DieType[] = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20', 'd100']
export const MAX_DICE = 20
