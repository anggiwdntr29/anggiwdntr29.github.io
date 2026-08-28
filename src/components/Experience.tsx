import * as motion from 'motion/react-client'
import { content } from '../data/content'
import { fadeUp } from '../lib/motion'
import { Section } from './Section'

export function Experience() {

  return (
    <Section id="experience" label={content.sections.experience}>
      <ol className="space-y-8">
        {content.experience.map((job) => (
          <motion.li
            key={`${job.company}-${job.role}`}
            variants={fadeUp}
            className="grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6"
          >
            <p className="text-sm tabular-nums text-neutral-400 dark:text-neutral-600">
              {job.period}
            </p>
            <div>
              <h3 className="font-medium tracking-tight">
                {job.role}
                <span className="text-neutral-400 dark:text-neutral-600">
                  {' '}
                  · {job.company}
                </span>
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {job.summary}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  )
}
