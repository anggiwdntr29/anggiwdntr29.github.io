import { Moon, Sun } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { content, site } from "../data/content";
import { useApp } from "../lib/app-context";

export function Header() {
  const { theme, toggleTheme } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  // Anchor hanya bekerja di beranda; dari halaman lain harus kembali dulu.
  const home = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md transition-colors dark:bg-neutral-950/80 ${
        scrolled
          ? "border-neutral-200 dark:border-neutral-800"
          : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-6 px-6">
        <Link
          to="/"
          className="text-sm font-medium tracking-tight transition-colors hover:text-neutral-500 dark:hover:text-neutral-400"
        >
          {site.handle}
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden sm:block">
            <ul className="flex items-center gap-6">
              {content.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={home ? item.href : `/${item.href}`}
                    className="text-sm text-neutral-500 transition-colors hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            aria-label={content.toggles.theme}
            title={content.toggles.theme}
            onClick={toggleTheme}
            className="-mr-2 flex size-9 items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-50"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.2 }}
                className="flex"
              >
                {theme === "dark" ? (
                  <Sun className="size-4" strokeWidth={1.75} />
                ) : (
                  <Moon className="size-4" strokeWidth={1.75} />
                )}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
