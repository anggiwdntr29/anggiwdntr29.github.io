import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";
import { content, stackRows, type Tech } from "../data/content";
import { fadeUp } from "../lib/motion";
import { Section } from "./Section";

// Kecepatan gerak baris stack, dalam piksel per detik.
const SPEED = 30;

function Chip({ tech }: { tech: Tech }) {
  const icon = tech.icon;
  const isDark = parseInt(icon.hex, 16) < 0x333333;

  return (
    <li className="flex shrink-0 items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 dark:border-neutral-800">
      {
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={`size-4 shrink-0 ${isDark ? "dark:fill-current" : ""}`}
          fill={`#${icon.hex}`}
        >
          <path d={icon.path} />
        </svg>
      }
      <span className="whitespace-nowrap text-sm text-neutral-700 dark:text-neutral-300">
        {tech.name}
      </span>
    </li>
  );
}

function Row({ row, reverse }: { row: Tech[]; reverse: boolean }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [copies, setCopies] = useState(2);
  const [duration, setDuration] = useState(40);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const set = track.querySelector<HTMLElement>("[data-set]");
      if (!set) return;
      const setWidth = set.getBoundingClientRect().width;
      if (!setWidth) return;
      track.style.setProperty("--set-width", `${setWidth}px`);

      // Durasi dihitung dari lebar, bukan jumlah item, supaya
      // ketiga baris bergerak pada kecepatan yang sama meski
      // panjang chip-nya berbeda.
      const next = setWidth / SPEED;
      setDuration((d) => (Math.abs(d - next) < 0.5 ? d : next));

      const needed = Math.ceil((window.innerWidth * 2) / setWidth) + 1;
      setCopies((c) => (c === needed ? c : needed));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [row]);

  return (
    <div className="relative overflow-hidden">
      <ul
        ref={trackRef}
        className="flex w-max py-1.5"
        style={{
          animationName: "marquee",
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {Array.from({ length: copies }, (_, copy) => (
          <li key={copy} aria-hidden={copy > 0}>
            <ul className="flex gap-3 pr-3" data-set={copy === 0 || undefined}>
              {row.map((tech) => (
                <Chip key={tech.name} tech={tech} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Stack() {
  return (
    <Section id="stack" label={content.sections.stack}>
      {/* Tepi kiri-kanan dibuat memudar agar chip tidak terpotong keras. */}
      <motion.div
        variants={fadeUp}
        className="-mx-6 space-y-1 px-6 mask-[linear-gradient(to_right,transparent,black_3rem,black_calc(100%-3rem),transparent)]"
      >
        {stackRows.map((row, i) => (
          <Row key={i} row={row} reverse={i % 2 === 1} />
        ))}
      </motion.div>
    </Section>
  );
}
