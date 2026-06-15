import { useHistoryStore } from '../../../store/historyStore'

/** Thin selector hook — keeps components decoupled from the store shape. */
export function useHistory() {
  const entries = useHistoryStore((s) => s.entries)
  const addEntry = useHistoryStore((s) => s.addEntry)
  const clearHistory = useHistoryStore((s) => s.clearHistory)
  return { entries, addEntry, clearHistory }
}
