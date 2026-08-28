# Gambar proyek

Satu folder per proyek, dinamai sesuai `slug` di `src/data/projects.ts`.

```
src/assets/projects/
  kirana-commerce/
    cover.png
    catalogue.png
    checkout.png
  sarana-dashboard/
    cover.png
```

Cara memakainya di `src/data/projects.ts`:

```ts
import cover from "../assets/projects/kirana-commerce/cover.png";
import catalogue from "../assets/projects/kirana-commerce/catalogue.png";

export const projects: Project[] = [
  {
    slug: "kirana-commerce",
    image: cover,              // gambar di kartu
    caseStudy: {
      cover,                   // gambar besar di halaman detail
      sections: [
        {
          heading: "What I built",
          body: ["..."],
          images: [{ src: catalogue, caption: "Halaman katalog" }],
        },
      ],
    },
  },
];
```

## Kenapa di-import, bukan path string

Situs ini dilayani dari `/anggiwdntr/` di GitHub Pages. Path string
seperti `/images/foo.png` akan 404. Import membuat Vite menulis ulang
path-nya dan menambahkan hash untuk cache busting.

## Format

- **AVIF** atau **WebP** — jauh lebih kecil dari PNG/JPG
- Lebar 1600px sudah cukup untuk gambar cover
- Screenshot UI: PNG kalau banyak teks, WebP kalau banyak foto
