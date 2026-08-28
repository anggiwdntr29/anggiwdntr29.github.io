import {
  siCss,
  siDocker,
  siFigma,
  siGit,
  siHtml5,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siReact,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
} from "simple-icons";
import type { Tech } from "./types";

// Tiga baris berjalan; arahnya berselang-seling di komponen.
export const stackRows: Tech[][] = [
  [
    { name: "TypeScript", icon: siTypescript },
    { name: "React", icon: siReact },
    { name: "Next.js", icon: siNextdotjs },
    { name: "Tailwind CSS", icon: siTailwindcss },
    { name: "Vite", icon: siVite },
  ],
  [
    { name: "Node.js", icon: siNodedotjs },
    { name: "PostgreSQL", icon: siPostgresql },
    { name: "Prisma", icon: siPrisma },
    { name: "Docker", icon: siDocker },
    { name: "Vercel", icon: siVercel },
  ],
  [
    { name: "Git", icon: siGit },
    { name: "Figma", icon: siFigma },
    { name: "JavaScript", icon: siJavascript },
    { name: "HTML5", icon: siHtml5 },
    { name: "CSS", icon: siCss },
  ],
];
