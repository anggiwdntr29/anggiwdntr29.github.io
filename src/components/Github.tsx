import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import { content, site } from "../data/content";
import fallback from "../data/github.json";
import { useApp } from "../lib/app-context";
import { fadeUp } from "../lib/motion";
import { Section } from "./Section";

// Palet GitHub. Indeks 0 = tanpa kontribusi.
const LIGHT = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];
const DARK = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];

type Day = { date: string; level: number; count: number };

// API ini menghormati setting "include private contributions" dan
// mengirim CORS header, jadi bisa dipanggil langsung dari browser.
const API = `https://github-contributions-api.jogruber.de/v4/${site.github}?y=last`;

export function Github() {
  const { theme } = useApp();
  // Data hasil build dipakai lebih dulu agar grafik langsung tampil,
  // lalu ditimpa angka terbaru begitu fetch selesai.
  const [days, setDays] = useState<Day[]>(fallback.days);
  const [total, setTotal] = useState(fallback.total);

  useEffect(() => {
    const controller = new AbortController();

    fetch(API, { signal: controller.signal })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((data: { total: Record<string, number>; contributions: Day[] }) => {
        if (!data.contributions?.length) return;
        setDays(data.contributions);
        setTotal(
          data.contributions.reduce((sum, d) => sum + (d.count ?? 0), 0),
        );
      })
      // Kalau API mati, grafik tetap tampil dengan data build.
      .catch(() => {});

    return () => controller.abort();
  }, []);

  const palette = theme === "dark" ? DARK : LIGHT;
  const profile = `https://github.com/${site.github}`;

  return (
    <Section id="github" label={content.sections.github}>
      <motion.a
        variants={fadeUp}
        href={profile}
        target="_blank"
        rel="noreferrer"
        className="block overflow-x-auto rounded-lg border border-neutral-200 p-4 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
      >
        <div
          className="grid min-w-max grid-flow-col grid-rows-7 gap-[3px]"
          role="img"
          aria-label={`${total} ${content.github.contributions}`}
        >
          {days.map((d) => (
            <span
              key={d.date}
              title={`${d.date}: ${d.count}`}
              className="size-[10px] rounded-[2px]"
              style={{ backgroundColor: palette[d.level] }}
            />
          ))}
        </div>
      </motion.a>

      <motion.p
        variants={fadeUp}
        className="mt-3 text-sm text-neutral-500 dark:text-neutral-400"
      >
        <span className="text-neutral-950 dark:text-neutral-50">
          {total.toLocaleString("en-US")} {content.github.contributions}
        </span>{" "}
        {content.github.note}{" "}
        <a
          href={profile}
          target="_blank"
          rel="noreferrer"
          className="text-neutral-950 underline underline-offset-4 dark:text-neutral-50"
        >
          @{site.github}
        </a>
        .
      </motion.p>
    </Section>
  );
}
