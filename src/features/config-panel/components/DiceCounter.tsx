interface DiceCounterProps {
  total: number
  max: number
}

/** Small badge showing how many dice are on the board vs the cap. */
export function DiceCounter({ total, max }: DiceCounterProps) {
  const isFull = total >= max
  return (
    <p className={`text-xs text-center mb-2 ${isFull ? 'text-dis' : 'text-parchment/50'}`}>
      {total}/{max} dados
    </p>
  )
}
