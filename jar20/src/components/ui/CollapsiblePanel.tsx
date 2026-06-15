import { useUiStore } from '../../store/uiStore'
import { WoodPanel } from './WoodPanel'
import { RedRibbon } from './RedRibbon'
import { cn } from '../../utils/cn'
import type { PanelSide } from '../../types/ui'

interface CollapsiblePanelProps {
  side: PanelSide
  children: React.ReactNode
  className?: string
}

/**
 * Animated wrapper that handles open/close for both lateral panels.
 * Uses CSS width transition so the inner content stays mounted (avoids re-renders).
 */
export function CollapsiblePanel({ side, children, className }: CollapsiblePanelProps) {
  const isHistoryOpen = useUiStore((s) => s.isHistoryOpen)
  const isConfigOpen = useUiStore((s) => s.isConfigOpen)
  const isOpen = side === 'left' ? isHistoryOpen : isConfigOpen

  return (
    <div
      className={cn(
        'relative shrink-0 overflow-hidden transition-all duration-300',
        isOpen ? 'w-64' : 'w-0',
        className,
      )}
    >
      <WoodPanel side={side} className="h-full w-64">
        {children}
      </WoodPanel>
      <RedRibbon side={side === 'left' ? 'right' : 'left'} visible={isOpen} />
    </div>
  )
}
