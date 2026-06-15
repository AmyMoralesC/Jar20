import { create } from 'zustand'
import type { DieInstance, DieType, AdvantageMode } from '../types/dice'

interface DiceState {
  dice: DieInstance[]
  bonus: number
  advantageMode: AdvantageMode

  addDie: (type: DieType) => void
  removeDie: (id: string) => void
  removeSelected: () => void
  selectDie: (id: string) => void
  deselectAll: () => void
  setBonus: (bonus: number) => void
  setAdvantageMode: (mode: AdvantageMode) => void
  clearBoard: () => void
}

export const useDiceStore = create<DiceState>((set) => ({
  dice: [],
  bonus: 0,
  advantageMode: null,

  addDie: (type) =>
    set((state) => {
      // TODO Phase 2: enforce MAX_DICE and d100 rule
      const newDie: DieInstance = {
        id: crypto.randomUUID(),
        type,
        isSelected: false,
        isGhost: false,
        position: { x: 50, y: 50 }, // center %
        rotation: { x: 0, y: 0, z: 0 },
      }
      return { dice: [...state.dice, newDie] }
    }),

  removeDie: (id) =>
    set((state) => ({ dice: state.dice.filter((d) => d.id !== id) })),

  removeSelected: () =>
    set((state) => ({ dice: state.dice.filter((d) => !d.isSelected) })),

  selectDie: (id) =>
    set((state) => ({
      dice: state.dice.map((d) =>
        d.id === id ? { ...d, isSelected: !d.isSelected } : d,
      ),
    })),

  deselectAll: () =>
    set((state) => ({
      dice: state.dice.map((d) => ({ ...d, isSelected: false })),
    })),

  setBonus: (bonus) => set({ bonus }),

  setAdvantageMode: (advantageMode) => set({ advantageMode }),

  clearBoard: () => set({ dice: [], bonus: 0, advantageMode: null }),
}))
