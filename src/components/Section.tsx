import * as motion from 'motion/react-client'
import { fadeUp, inView, stagger } from '../lib/motion'

type Props = {
  id: string
  label: string
  children: React.ReactNode
}

export function Section({ id, label, children }: Props) {
  return (
    <motion.section
      id={id}
      variants={stagger}
      {...inView}
      className="py-10 sm:py-12"
    >
      <motion.h2
        variants={fadeUp}
        className="mb-8 text-xs font-medium uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500"
      >
        {label}
      </motion.h2>
      {children}
    </motion.section>
  )
}
