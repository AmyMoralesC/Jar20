import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { HistoryEntry } from '../types/history'
import type { RollResult } from '../types/dice'

interface HistoryState {
  entries: HistoryEntry[]
  addEntry: (result: RollResult) => void
  clearHistory: () => void
}

export const useHistoryStore = create<HistoryState>()(
  persist(
    (set) => ({
      entries: [],

      addEntry: (result) =>
        set((state) => {
          const entry: HistoryEntry = {
            id: crypto.randomUUID(),
            dice: result.dice,
            bonus: result.bonus,
            total: result.total,
            advantageMode: result.advantageMode,
            timestamp: result.timestamp,
          }
          // newest first
          return { entries: [entry, ...state.entries].slice(0, 100) }
        }),

      clearHistory: () => set({ entries: [] }),
    }),
    { name: 'jar20-history' }, // localStorage key
  ),
)
