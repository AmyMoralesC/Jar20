import { useDiceStore } from '../../../store/diceStore'
import { useUiStore } from '../../../store/uiStore'
import { isAdvantageEligible } from '../../../utils/diceRules'
import { Die } from './Die'
import { BonusOrb } from './BonusOrb'
import { AdvantageToggle } from './AdvantageToggle'
import { RollButton } from './RollButton'
import { ResultCard } from './ResultCard'

/**
 * Central board that holds all dice, the bonus orb, roll button, and result card.
 * Handles click-to-select and right-click-to-remove gestures.
 */
export function DiceBoard() {
  const dice = useDiceStore((s) => s.dice)
  const bonus = useDiceStore((s) => s.bonus)
  const advantageMode = useDiceStore((s) => s.advantageMode)
  const selectDie = useDiceStore((s) => s.selectDie)
  const removeDie = useDiceStore((s) => s.removeDie)
  const deselectAll = useDiceStore((s) => s.deselectAll)
  const setBonus = useDiceStore((s) => s.setBonus)
  const setAdvantageMode = useDiceStore((s) => s.setAdvantageMode)
  const phase = useUiStore((s) => s.phase)

  const realDice = dice.filter((d) => !d.isGhost)
  const selectedCount = dice.filter((d) => d.isSelected).length
  const showOrb = realDice.length > 1
  const showAdvantage = isAdvantageEligible(dice)

  return (
    <div
      className="relative w-full h-full"
      onClick={deselectAll}
    >
      {/* Empty state */}
      {realDice.length === 0 && phase === 'idle' && (
        <p className="absolute inset-0 flex items-center justify-center text-parchment/20 text-sm pointer-events-none">
          Agrega dados desde el panel derecho
        </p>
      )}

      {/* Dice */}
      {dice.map((die) => (
        <Die
          key={die.id}
          die={die}
          onClick={(e?: React.MouseEvent) => {
            e?.stopPropagation()
            selectDie(die.id)
          }}
          onContextMenu={(e) => {
            e.preventDefault()
            e.stopPropagation()
            if (phase === 'idle') removeDie(die.id)
          }}
        />
      ))}

      {/* Bonus orb */}
      <BonusOrb bonus={bonus} onChange={setBonus} visible={showOrb} />

      {/* Advantage toggle — shown above board when eligible */}
      {showAdvantage && phase === 'idle' && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2">
          <AdvantageToggle mode={advantageMode} onChange={setAdvantageMode} />
        </div>
      )}

      {/* Result overlay */}
      <ResultCard />

      {/* Bottom bar: roll button */}
      {phase === 'idle' && realDice.length > 0 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <RollButton />
        </div>
      )}
    </div>
  )
}
