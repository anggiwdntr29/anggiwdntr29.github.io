// Titik masuk data. Isinya ada di file terpisah supaya
// tiap bagian gampang diedit tanpa scroll panjang:
//
//   site.ts        nama, email, foto, tautan sosial
//   copy.ts        semua teks antarmuka
//   projects.ts    daftar proyek + studi kasus
//   experience.ts  riwayat kerja
//   stack.ts       teknologi (3 baris berjalan)
//   types.ts       bentuk datanya

import { copy } from "./copy";
import { experience } from "./experience";
import { projects } from "./projects";

export { site, socials } from "./site";
export { stackRows } from "./stack";
export { projects } from "./projects";
export { experience } from "./experience";
export { copy } from "./copy";
export type { CaseStudy, Job, Project, Social, Tech } from "./types";

// Komponen memakai `content.*`, jadi semuanya digabung di sini.
export const content = { ...copy, projects, experience };
