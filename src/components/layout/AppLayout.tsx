import { CollapsiblePanel } from '../ui/CollapsiblePanel'
import { useUiStore } from '../../store/uiStore'

interface AppLayoutProps {
  header: React.ReactNode
  leftPanel: React.ReactNode
  rightPanel: React.ReactNode
  board: React.ReactNode
}

/**
 * Three-column layout: [history panel] [dice board] [config panel].
 * Panels collapse via CollapsiblePanel; board takes remaining space.
 */
export function AppLayout({ header, leftPanel, rightPanel, board }: AppLayoutProps) {
  const phase = useUiStore((s) => s.phase)

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      {/* Header */}
      <header className="shrink-0 z-20">{header}</header>

      {/* Main area */}
      <main className="flex flex-1 overflow-hidden relative">
        {/* Left panel — always rendered, width animated */}
        <CollapsiblePanel side="left">{leftPanel}</CollapsiblePanel>

        {/* Central board */}
        <div className="flex-1 relative overflow-hidden">{board}</div>

        {/* Right panel */}
        <CollapsiblePanel side="right">{rightPanel}</CollapsiblePanel>
      </main>

      {/* Overlay blocker during animation */}
      {phase === 'rolling' && (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-50 pointer-events-all"
          onContextMenu={(e) => e.preventDefault()} // right-click skips animation (handled by DiceBoard)
        />
      )}
    </div>
  )
}
