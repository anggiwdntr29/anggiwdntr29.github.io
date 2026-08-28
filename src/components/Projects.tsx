import { ArrowRight, ArrowUpRight } from "lucide-react";
import * as motion from "motion/react-client";
import { Link } from "react-router-dom";
import { content, type Project } from "../data/content";
import { fadeUp } from "../lib/motion";
import { ProtectedImage } from "./ProtectedImage";
import { Section } from "./Section";

export function Card({ project }: { project: Project }) {

  const inner = (
    <>
      <div className="aspect-[16/10] overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
        {project.image ? (
          <ProtectedImage
            src={project.image}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex size-full items-center justify-center text-xs text-neutral-400 dark:text-neutral-600">
            {project.title}
          </div>
        )}
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="flex items-center gap-1 font-medium tracking-tight">
          {project.title}
          <ArrowUpRight
            className="size-4 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-neutral-600"
            strokeWidth={1.75}
          />
        </h3>
        <span className="shrink-0 text-sm tabular-nums text-neutral-400 dark:text-neutral-600">
          {project.year}
        </span>
      </div>

      {/* Dipotong dua baris agar tinggi kartu tetap seragam. */}
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-neutral-400 dark:text-neutral-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex flex-col rounded-lg outline-offset-4"
    >
      {inner}
    </Link>
  );
}

export function Projects() {
  return (
    <Section id="projects" label={content.sections.projects}>
      <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12">
        {content.projects.slice(0, 4).map((p) => (
          <motion.div key={p.title} variants={fadeUp}>
            <Card project={p} />
          </motion.div>
        ))}
      </div>

      <motion.div variants={fadeUp} className="mt-10">
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-600 underline-offset-4 transition-colors hover:text-neutral-950 hover:underline dark:text-neutral-400 dark:hover:text-neutral-50"
        >
          {content.projectsCta.seeAll}
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            strokeWidth={1.75}
          />
        </Link>
      </motion.div>
    </Section>
  );
}
