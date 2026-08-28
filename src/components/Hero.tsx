import { ArrowDown, ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";
import { content, site, socials } from "../data/content";
import { ProtectedImage } from "./ProtectedImage";
import { SocialIcon } from "./SocialIcon";
import { fadeUp, stagger } from "../lib/motion";

function initials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Hero() {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="show"
      className="pb-10 pt-16 sm:pb-12 sm:pt-20"
    >
      <motion.div variants={fadeUp} className="flex items-center gap-5">
        {site.photo ? (
          <ProtectedImage
            src={site.photo}
            alt={site.name}
            width={96}
            height={96}
            loading="eager"
            className="size-20 shrink-0 rounded-full object-cover ring-1 ring-neutral-200 sm:size-24 dark:ring-neutral-800"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex size-20 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xl font-medium tracking-tight text-neutral-400 ring-1 ring-neutral-200 sm:size-24 dark:bg-neutral-900 dark:text-neutral-600 dark:ring-neutral-800"
          >
            {initials(site.name)}
          </div>
        )}

        <div className="min-w-0">
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
            {site.name}
          </h1>

          <ul className="-ml-1.5 mt-2 flex items-center gap-0.5">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="flex size-8 items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
                >
                  <SocialIcon icon={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.p
        variants={fadeUp}
        className="mt-8 text-pretty text-lg leading-relaxed text-neutral-600 dark:text-neutral-400"
      >
        {content.hero.headline}
      </motion.p>

      <motion.p
        variants={fadeUp}
        className="mt-4 text-pretty text-lg leading-relaxed text-neutral-600 dark:text-neutral-400"
      >
        {content.hero.body}
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
      >
        <a
          href={`mailto:${site.email}`}
          className="group inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-300"
        >
          {content.hero.primaryCta}
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            strokeWidth={1.75}
          />
        </a>
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-600 underline-offset-4 transition-colors hover:text-neutral-950 hover:underline dark:text-neutral-400 dark:hover:text-neutral-50"
        >
          {content.hero.secondaryCta}
          <ArrowDown
            className="size-4 transition-transform group-hover:translate-y-0.5"
            strokeWidth={1.75}
          />
        </a>
      </motion.div>
    </motion.section>
  );
}
