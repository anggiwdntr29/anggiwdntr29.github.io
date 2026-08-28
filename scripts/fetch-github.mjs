// Mengambil grafik kontribusi dari GitHub saat build.
// Dijalankan di Node (bukan browser), jadi tidak terhalang CORS.
// Sumbernya halaman publik profil, sehingga kontribusi privat ikut
// terhitung selama opsi "Include private contributions" aktif.

import { writeFile } from 'node:fs/promises'

const user = process.argv[2] ?? 'anggiwdntr29'
const out = new URL('../src/data/github.json', import.meta.url)

const MONTHS = {
  January: 1, February: 2, March: 3, April: 4, May: 5, June: 6,
  July: 7, August: 8, September: 9, October: 10, November: 11, December: 12,
}

function parse(html) {
  // Tiap sel punya id; jumlah aslinya ada di <tool-tip for="<id>">.
  const counts = new Map()
  const tip = /<tool-tip[^>]*for="(contribution-day-component-[\d-]+)"[^>]*>(.*?)<\/tool-tip>/gs
  for (const [, id, text] of html.matchAll(tip)) {
    const m = /^(?:(\d+)|No)\s+contributions?/.exec(text.trim())
    counts.set(id, m?.[1] ? Number(m[1]) : 0)
  }

  const days = []
  const cell = /<td[^>]*class="ContributionCalendar-day"[^>]*><\/td>/g
  for (const [tag] of [...html.matchAll(cell)].map((m) => [m[0]])) {
    const date = /data-date="([\d-]+)"/.exec(tag)?.[1]
    const id = /id="(contribution-day-component-[\d-]+)"/.exec(tag)?.[1]
    const level = Number(/data-level="(\d)"/.exec(tag)?.[1] ?? 0)
    if (date && id) days.push({ date, level, count: counts.get(id) ?? 0 })
  }
  return days
}

const res = await fetch(`https://github.com/users/${user}/contributions`, {
  headers: { 'user-agent': 'Mozilla/5.0', 'x-requested-with': 'XMLHttpRequest' },
})
if (!res.ok) throw new Error(`GitHub responded ${res.status}`)

const days = parse(await res.text())
if (days.length < 300) throw new Error(`Only parsed ${days.length} days`)

const total = days.reduce((sum, d) => sum + d.count, 0)
await writeFile(
  out,
  JSON.stringify({ user, total, updated: new Date().toISOString(), days }, null, 2),
)
console.log(`✓ ${user}: ${total} contributions across ${days.length} days`)
