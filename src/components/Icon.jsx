export default function Icon({ name }) {
  const common = {
    fill: 'var(--icon-fill, none)',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    viewBox: '0 0 24 24',
    'aria-hidden': 'true'
  }

  const paths = {
    bat: (
      <>
        <path d="m5 19 4-4" />
        <path d="M8 22 2 16" />
        <path d="m14.5 4.5 5 5-9 9-5-5z" />
        <path d="m17 2 5 5-2.5 2.5-5-5z" />
      </>
    ),
    jersey: (
      <>
        <path d="M8 4 5 6.5 2 7l2 5 2-1v9h12v-9l2 1 2-5-3-.5L16 4" />
        <path d="M8 4c.8 1.5 2.2 2.5 4 2.5S15.2 5.5 16 4" />
      </>
    ),
    glove: (
      <>
        <path d="M7 11V5a2 2 0 0 1 4 0v5" />
        <path d="M11 10V4a2 2 0 0 1 4 0v7" />
        <path d="M15 11V6a2 2 0 0 1 4 0v8c0 4-2.8 7-7 7H9a6 6 0 0 1-6-6v-3a2 2 0 0 1 4 0v2" />
      </>
    ),
    mallet: (
      <>
        <path d="m14 5 5 5" />
        <path d="m12 7 5 5" />
        <path d="M4 20 14.5 9.5" />
        <path d="m13 3 8 8-4 4-8-8z" />
      </>
    ),
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />,
    mail: (
      <>
        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
        <path d="m22 6-10 7L2 6" />
      </>
    ),
    web: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    )
  }

  return <svg {...common}>{paths[name]}</svg>
}
