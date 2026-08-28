import { ArrowLeft } from "lucide-react";
import * as motion from "motion/react-client";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/Projects";
import { content } from "../data/content";
import { fadeUp, stagger } from "../lib/motion";

export function AllProjects() {
  // Halaman baru selalu dibuka dari atas.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      variants={stagger}
      initial="hidden"
      animate="show"
      className="py-16 sm:py-20"
    >
      <motion.div variants={fadeUp}>
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50"
        >
          <ArrowLeft
            className="size-4 transition-transform group-hover:-translate-x-0.5"
            strokeWidth={1.75}
          />
          {content.projectsCta.back}
        </Link>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="mt-8 text-3xl font-medium tracking-tight sm:text-4xl"
      >
        {content.projectsCta.allTitle}
      </motion.h1>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12">
        {content.projects.map((p) => (
          <motion.div key={p.title} variants={fadeUp}>
            <Card project={p} />
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}
