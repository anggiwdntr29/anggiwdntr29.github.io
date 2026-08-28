/// <reference types="vite/client" />

// Vite sudah mendeklarasikan png/jpg/svg/webp dan lainnya.
// AVIF belum termasuk, jadi ditambahkan di sini.
declare module "*.avif" {
  const src: string;
  export default src;
}
