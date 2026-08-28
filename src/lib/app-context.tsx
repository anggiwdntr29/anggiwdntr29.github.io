import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { flushSync } from 'react-dom'

type Theme = 'light' | 'dark'

type Ctx = {
  theme: Theme
  toggleTheme: () => void
}

const AppContext = createContext<Ctx | null>(null)

function readTheme(): Theme {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    /* storage may be unavailable */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(readTheme)

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    root.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* ignore */
    }
  }, [theme])

  // Tema baru menyapu dari kiri ke kanan.
  // Butuh View Transitions API; browser lain langsung berganti.
  const toggleTheme = useCallback(() => {
    const flip = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (!document.startViewTransition || reduced) {
      flip()
      return
    }

    // flushSync agar DOM sudah berubah saat snapshot diambil.
    document.startViewTransition(() => {
      flushSync(flip)
    })
  }, [])

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
