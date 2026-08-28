import { ArrowLeft, ArrowUpRight } from "lucide-react";
import * as motion from "motion/react-client";
import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ProtectedImage } from "../components/ProtectedImage";
import { content } from "../data/content";
import { fadeUp, stagger } from "../lib/motion";

function Figure({ src, caption }: { src: string; caption?: string }) {
  return (
    <figure>
      <div className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
        {src ? (
          <ProtectedImage src={src} alt={caption ?? ""} className="w-full" />
        ) : (
          // Slot kosong sampai gambarnya dipasang.
          <div className="flex aspect-[16/10] items-center justify-center text-xs text-neutral-400 dark:text-neutral-600">
            {caption ?? "Image"}
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs text-neutral-400 dark:text-neutral-600">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function ProjectDetail() {
  const { slug } = useParams();
  const project = content.projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <Navigate to="/projects" replace />;

  const cs = project.caseStudy;
  // Repo biasanya privat, jadi hanya tautan live yang ditampilkan.
  const links = project.live
    ? [{ label: "Live site", href: project.live }]
    : [];

  return (
    <motion.main
      variants={stagger}
      initial="hidden"
      animate="show"
      className="py-16 sm:py-20"
    >
      <motion.div variants={fadeUp}>
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50"
        >
          <ArrowLeft
            className="size-4 transition-transform group-hover:-translate-x-0.5"
            strokeWidth={1.75}
          />
          {content.projectsCta.allTitle}
        </Link>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="mt-8 text-3xl font-medium tracking-tight sm:text-4xl"
      >
        {project.title}
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mt-3 text-pretty text-lg leading-relaxed text-neutral-600 dark:text-neutral-400"
      >
        {project.description}
      </motion.p>

      {/* Stack selalu ada. Links hanya muncul kalau proyeknya
          memang punya tautan publik. */}
      <motion.dl
        variants={fadeUp}
        className="mt-8 grid gap-x-6 gap-y-4 border-t border-neutral-200 pt-8 sm:grid-cols-3 dark:border-neutral-800"
      >
        <div className="sm:col-span-2">
          <dt className="text-xs uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-600">
            Stack
          </dt>
          <dd className="mt-1 text-sm">{project.tags.join(" · ")}</dd>
        </div>

        {links.length > 0 && (
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-600">
              Links
            </dt>
            <dd className="mt-1 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-fit items-center gap-1 text-sm underline-offset-4 hover:underline"
                >
                  {l.label}
                  <ArrowUpRight
                    className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.75}
                  />
                </a>
              ))}
            </dd>
          </div>
        )}
      </motion.dl>

      {cs?.cover && (
        <motion.div variants={fadeUp} className="mt-12">
          <Figure src={cs.cover} />
        </motion.div>
      )}

      {cs ? (
        <div className="mt-16 space-y-16">
          {cs.sections.map((section) => (
            <motion.section key={section.heading} variants={fadeUp}>
              <h2 className="text-xl font-medium tracking-tight">
                {section.heading}
              </h2>

              <div className="mt-4 space-y-4 text-pretty leading-relaxed text-neutral-600 dark:text-neutral-400">
                {section.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              {section.images && section.images.length > 0 && (
                <div
                  className={`mt-8 grid gap-4 ${
                    section.images.length > 1 ? "sm:grid-cols-2" : ""
                  }`}
                >
                  {section.images.map((img, i) => (
                    <Figure key={i} src={img.src} caption={img.caption} />
                  ))}
                </div>
              )}
            </motion.section>
          ))}
        </div>
      ) : (
        <motion.p
          variants={fadeUp}
          className="mt-12 text-neutral-500 dark:text-neutral-400"
        >
          {content.projectsCta.soon}
        </motion.p>
      )}
    </motion.main>
  );
}
