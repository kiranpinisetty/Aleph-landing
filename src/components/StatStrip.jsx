import useIntersection from '../hooks/useIntersection'

export default function StatStrip({ stats }) {
  const [ref, visible] = useIntersection()

  return (
    <section className={`stats-strip reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
      <div className="container stats-grid">
        {stats.map(([number, label], index) => (
          <div className={`strip-item ${index === 3 ? 'is-city' : ''}`} key={label}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
