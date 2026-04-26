import { motion as Motion } from 'framer-motion'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import StarIcon from '@mui/icons-material/Star'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { reviewLinks, testimonials } from './siteContent'
import { reveal, revealTransition, revealViewport, staggerParent } from './motion'

export default function Testimonials() {
  return (
    <section id="proof" className="relative overflow-hidden bg-white py-20 text-black sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={revealViewport} transition={revealTransition} className="max-w-4xl">
          <p className="text-[0.72rem] font-black uppercase tracking-[0.16em] text-primaryRed">Social Proof</p>
          <h2 className="mt-4 font-black uppercase leading-[0.9] tracking-[-0.02em] text-[clamp(2.2rem,7vw,5.6rem)] text-black">Trusted By Teams Across Vijayawada</h2>
          <div className="mt-6 inline-flex flex-wrap items-center gap-1.5 border border-primaryRed/35 px-3 py-2 text-[0.65rem] font-black uppercase tracking-[0.11em] text-primaryRed sm:gap-2 sm:px-4 sm:text-xs">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon key={index} sx={{ fontSize: 14 }} />
            ))}
            Google Reviews
          </div>
        </Motion.div>

        <Motion.div variants={staggerParent} initial="hidden" whileInView="visible" viewport={revealViewport} className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
          {testimonials.map(([quote, name, team, sport]) => (
            <Motion.article key={`${name}-${team}`} variants={reveal} transition={revealTransition} className="card-lift h-full rounded-sm bg-black p-5 text-white sm:p-7">
              <div className="flex gap-1 text-primaryRed" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} sx={{ fontSize: 18 }} />
                ))}
              </div>
              <p className="mt-4 text-sm italic leading-7 text-white/72 sm:mt-5 sm:text-base sm:leading-8">"{quote}"</p>
              <div className="mt-6 sm:mt-7">
                <p className="text-sm font-black text-white sm:text-base">{name}</p>
                <p className="mt-1 text-xs font-semibold text-white/50 sm:text-sm">{team} · {sport}</p>
              </div>
            </Motion.article>
          ))}
        </Motion.div>

        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
          <a className="button-like inline-flex w-full items-center justify-center gap-2 text-center text-xs font-black uppercase tracking-[0.08em] text-primaryRed sm:w-auto sm:text-sm" href={reviewLinks.google} target="_blank" rel="noreferrer">
            Read Google Reviews <OpenInNewIcon fontSize="small" />
          </a>
          <a className="button-like inline-flex w-full items-center justify-center gap-2 text-center text-xs font-black uppercase tracking-[0.08em] text-primaryRed sm:w-auto sm:text-sm" href="#contact">
            Want to see your team here? Contact Us <ArrowForwardIcon fontSize="small" />
          </a>
        </div>
      </div>
    </section>
  )
}
