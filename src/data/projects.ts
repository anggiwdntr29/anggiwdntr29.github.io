import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "kirana-commerce",
    title: "Kirana Commerce",
    description:
      "A storefront that loads in 0.9s on 3G. Server-side rendering across a 12,000-product catalogue.",
    tags: ["Next.js", "PostgreSQL"],
    year: "2026",
    live: "https://example.com",
    repo: "https://github.com/anggiwdntr29",
    // ↓ CONTOH POLA. Salin bentuk ini untuk proyek lain.
    caseStudy: {
      sections: [
        {
          heading: "The problem",
          body: [
            "The old storefront took eleven seconds to become interactive on a 3G connection. Most of the catalogue never rendered at all on mid-range Android phones, which was roughly two thirds of the traffic.",
            "Ceritakan konteksnya di sini: siapa kliennya, apa yang rusak, kenapa itu penting.",
          ],
          images: [{ src: "", caption: "Storefront sebelum dikerjakan ulang" }],
        },
        {
          heading: "What I built",
          body: [
            "Jelaskan keputusan teknis yang kamu ambil dan alasannya. Bagian ini paling menarik untuk dibaca orang teknis: bukan daftar teknologi, tapi kenapa kamu memilihnya.",
          ],
          images: [
            { src: "", caption: "Halaman katalog" },
            { src: "", caption: "Alur checkout" },
          ],
        },
        {
          heading: "Result",
          body: [
            "Tutup dengan angka kalau ada. Waktu muat turun dari 11 detik ke 0.9 detik; konversi mobile naik 34%.",
          ],
        },
      ],
    },
  },
  {
    slug: "sarana-dashboard",
    title: "Sarana Dashboard",
    description:
      "Internal analytics for an operations team. A 50,000-row table kept smooth through virtualisation.",
    tags: ["React", "TypeScript"],
    year: "2025",
    live: "https://example.com",
  },
  {
    slug: "wanua-booking",
    title: "Wanua Booking",
    description:
      "A reservation system for local guesthouses. Calendar, payments, and notifications in one flow.",
    tags: ["React", "Node.js"],
    year: "2025",
    repo: "https://github.com/anggiwdntr29",
  },
  {
    slug: "pustaka-ui",
    title: "Pustaka UI",
    description:
      "An open-source design system of 40 accessible components, used across three internal products.",
    tags: ["React", "Tailwind"],
    year: "2024",
    repo: "https://github.com/anggiwdntr29",
  },
];
