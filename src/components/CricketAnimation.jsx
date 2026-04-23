import useScrollAnimation from '../hooks/useScrollAnimation'

export default function CricketAnimation() {
  const values = useScrollAnimation()

  return (
    <svg className="cricket-animation" viewBox="0 0 360 220" aria-hidden="true">
      <g className="floodlights">
        <path d="M235 0 360 126 360 164 214 0Z" />
        <path d="M145 0 286 220 238 220 110 0Z" />
      </g>
      <g className="crowd crowd-top">
        {Array.from({ length: 16 }).map((_, index) => (
          <circle key={index} cx={12 + index * 18} cy={28 + (index % 3) * 7} r={8 + (index % 2) * 2} />
        ))}
      </g>
      <g className="crowd crowd-bottom">
        {Array.from({ length: 18 }).map((_, index) => (
          <rect key={index} x={index * 20} y={174 - (index % 4) * 4} width="12" height="28" />
        ))}
      </g>
      <g transform={`translate(${values.playerX} 0)`}>
        <path className="player" d="M84 170 112 126 143 160M112 126 126 74 148 108M126 74 101 102" />
        <circle className="player" cx="127" cy="58" r="14" />
        <g transform={`translate(148 104) rotate(${values.batRotate})`}>
          <path className="bat-outline" d="M0 0 76 -12 82 6 6 20Z" />
          <path className="bat-grip" d="M-34 9 4 6" />
        </g>
      </g>
      <circle className="ball" cx={values.ballX} cy={values.ballY} r="6" />
      <path
        className="shot-trail"
        style={{ opacity: values.strokeOpacity }}
        d={`M152 101 C190 ${80 - values.phase * 4}, 238 ${48 + values.phase * 2}, ${values.ballX} ${values.ballY}`}
      />
    </svg>
  )
}
