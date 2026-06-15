import { useState, useEffect } from 'react'

/**
 * Generic hook to sync state with localStorage.
 * The historyStore already handles this via zustand/persist,
 * but this hook is available for one-off local values.
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } catch {
      // storage might be full or blocked
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue] as const
}
