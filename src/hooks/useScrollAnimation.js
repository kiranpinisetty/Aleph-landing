import { useEffect, useMemo, useState } from 'react'

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)
const mix = (from, to, progress) => from + (to - from) * progress

const phases = [
  { start: 0, end: 1 / 6 },
  { start: 1 / 6, end: 2 / 6 },
  { start: 2 / 6, end: 3 / 6 },
  { start: 3 / 6, end: 4 / 6 },
  { start: 4 / 6, end: 5 / 6 },
  { start: 5 / 6, end: 1 }
]

export default function useScrollAnimation() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? clamp(window.scrollY / scrollable, 0, 1) : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return useMemo(() => {
    const phaseIndex = phases.findIndex(({ start, end }) => progress >= start && progress <= end)
    const activePhase = phaseIndex === -1 ? 5 : phaseIndex
    const phase = phases[activePhase]
    const local = clamp((progress - phase.start) / (phase.end - phase.start), 0, 1)

    return {
      progress,
      phase: activePhase + 1,
      batRotate: mix(-34, 62, progress),
      ballX: mix(72, 298, progress),
      ballY: mix(132, 54, Math.sin(progress * Math.PI)),
      playerX: mix(0, 16, local),
      strokeOpacity: mix(0.18, 0.72, local)
    }
  }, [progress])
}
