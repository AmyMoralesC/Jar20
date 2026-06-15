import { create } from 'zustand'
import type { AppPhase } from '../types/ui'

interface UiState {
  phase: AppPhase
  isHistoryOpen: boolean
  isConfigOpen: boolean
  isMuted: boolean
  isFastMode: boolean // skip roll animation

  setPhase: (phase: AppPhase) => void
  toggleHistory: () => void
  toggleConfig: () => void
  toggleMute: () => void
  toggleFastMode: () => void
  collapseBothPanels: () => void
  restorePanels: () => void
}

export const useUiStore = create<UiState>((set) => ({
  phase: 'idle',
  isHistoryOpen: true,
  isConfigOpen: true,
  isMuted: false,
  isFastMode: false,

  setPhase: (phase) => set({ phase }),
  toggleHistory: () => set((s) => ({ isHistoryOpen: !s.isHistoryOpen })),
  toggleConfig: () => set((s) => ({ isConfigOpen: !s.isConfigOpen })),
  toggleMute: () => set((s) => ({ isMuted: !s.isMuted })),
  toggleFastMode: () => set((s) => ({ isFastMode: !s.isFastMode })),
  collapseBothPanels: () => set({ isHistoryOpen: false, isConfigOpen: false }),
  restorePanels: () => set({ isHistoryOpen: true, isConfigOpen: true }),
}))
