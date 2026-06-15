import type { DieType, AdvantageMode } from './dice'

export interface HistoryEntryDie {
  type: DieType
  result: number
}

export interface HistoryEntry {
  id: string
  dice: HistoryEntryDie[]
  bonus: number
  total: number
  advantageMode: AdvantageMode
  timestamp: number // Date.now() → show as HH:MM
}
