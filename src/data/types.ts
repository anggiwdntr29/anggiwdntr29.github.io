import type { LucideIcon } from "lucide-react";
import type { SimpleIcon } from "simple-icons";

export type Social = {
  label: string;
  href: string;
  icon: LucideIcon | SimpleIcon;
};

export type Tech = { name: string; icon: SimpleIcon };

export type Project = {
  // Dipakai sebagai URL: /#/projects/<slug>
  slug: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  live?: string;
  repo?: string;
  image?: string;
  // Isi studi kasus. Kosongkan kalau proyeknya belum ditulis.
  caseStudy?: CaseStudy;
};

export type CaseStudy = {
  // Gambar besar di atas halaman.
  cover?: string;
  // Ceritanya dibagi per bagian. `images` boleh 1 (lebar penuh)
  // atau 2+ (grid berdampingan).
  sections: {
    heading: string;
    body: string[];
    images?: { src: string; caption?: string }[];
  }[];
};

export type Job = {
  company: string;
  role: string;
  period: string;
  summary: string;
};
