import { useCallback, useRef } from 'react'
import { useUiStore } from '../store/uiStore'

type SoundKey = 'roll' | 'select' | 'clear'

const SOUND_PATHS: Record<SoundKey, string> = {
  roll: '/assets/sounds/dice-roll.mp3',
  select: '/assets/sounds/dice-select.mp3',
  clear: '/assets/sounds/clear.mp3',
}

/**
 * Thin wrapper that respects the global mute setting.
 * Audio files are loaded lazily on first play.
 */
export function useSound() {
  const isMuted = useUiStore((s) => s.isMuted)
  const audioRefs = useRef<Partial<Record<SoundKey, HTMLAudioElement>>>({})

  const play = useCallback(
    (key: SoundKey) => {
      if (isMuted) return
      if (!audioRefs.current[key]) {
        audioRefs.current[key] = new Audio(SOUND_PATHS[key])
      }
      const audio = audioRefs.current[key]!
      audio.currentTime = 0
      audio.play().catch(() => {
        // autoplay blocked — silent fail
      })
    },
    [isMuted],
  )

  return { play }
}
