import type { HistoryEntry as HistoryEntryType } from '../../../types/history'
import { DiceIcon } from './DiceIcon'
import { cn } from '../../../utils/cn'

interface HistoryEntryProps {
  entry: HistoryEntryType
}

function formatTime(ts: number): string {
  return new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

export function HistoryEntry({ entry }: HistoryEntryProps) {
  const isAdv = entry.advantageMode === 'advantage'
  const isDis = entry.advantageMode === 'disadvantage'

  const accentClass = isAdv
    ? 'text-adv'
    : isDis
    ? 'text-dis'
    : 'text-parchment'

  const isMultiType = new Set(entry.dice.map((d) => d.type)).size > 1

  return (
    <li className="flex items-start gap-2 py-2 border-b border-wood-mid/40 last:border-0">
      {/* Die icon(s) */}
      <div className="flex flex-col gap-0.5 pt-0.5">
        {[...new Set(entry.dice.map((d) => d.type))].map((t) => (
          <DiceIcon key={t} type={t} className={accentClass} />
        ))}
      </div>

      {/* Label */}
      <div className="flex-1 min-w-0">
        <p className="text-xs text-parchment/60">
          {/* e.g. "1d20" or "2d6 + 1d4" */}
          {Object.entries(
            entry.dice.reduce<Record<string, number>>((acc, d) => {
              acc[d.type] = (acc[d.type] ?? 0) + 1
              return acc
            }, {}),
          )
            .map(([type, count]) => `${count}${type}`)
            .join(' + ')}
          {entry.bonus !== 0 && (
            <span className={cn('ml-1', accentClass)}>
              {entry.bonus > 0 ? `+${entry.bonus}` : entry.bonus}
            </span>
          )}
        </p>

        {isMultiType && (
          <p className="text-[10px] text-parchment/40 uppercase tracking-wide">Total</p>
        )}
      </div>

      {/* Result + time */}
      <div className="text-right shrink-0">
        <p className={cn('font-display text-base font-bold', accentClass)}>
          = {entry.total}
        </p>
        <p className="text-[10px] text-parchment/40">{formatTime(entry.timestamp)}</p>
      </div>
    </li>
  )
}
