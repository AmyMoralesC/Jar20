export type PanelSide = 'left' | 'right'

export interface PanelState {
  isOpen: boolean
}

export type AppPhase = 'idle' | 'rolling' | 'result'
