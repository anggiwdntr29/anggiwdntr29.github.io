import { ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";
import { content, site, socials } from "../data/content";
import { SocialIcon } from "./SocialIcon";
import { fadeUp, inView, stagger } from "../lib/motion";

export function Footer() {
  return (
    <motion.footer variants={stagger} {...inView} className="mt-4 py-12">
      <motion.h2
        variants={fadeUp}
        className="text-2xl font-medium tracking-tight"
      >
        {content.footer.heading}
      </motion.h2>

      <motion.a
        variants={fadeUp}
        href={`mailto:${site.email}`}
        className="group mt-3 inline-flex items-center gap-2 text-lg text-neutral-600 underline underline-offset-4 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50"
      >
        {site.email}
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-0.5"
          strokeWidth={1.75}
        />
      </motion.a>

      <motion.div
        variants={fadeUp}
        className="mt-12 flex flex-wrap items-center justify-between gap-4"
      >
        <p className="text-sm text-neutral-400 dark:text-neutral-600">
          © {new Date().getFullYear()} {site.name}. {content.footer.rights}
        </p>
        <ul className="flex items-center gap-1">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
                className="flex size-9 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
              >
                <SocialIcon icon={s.icon} />
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.footer>
  );
}
