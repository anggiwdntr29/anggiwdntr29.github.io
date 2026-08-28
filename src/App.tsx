import { Route, Routes } from 'react-router-dom'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Github } from './components/Github'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Stack } from './components/Stack'
import { AppProvider } from './lib/app-context'
import { AllProjects } from './pages/AllProjects'
import { ProjectDetail } from './pages/ProjectDetail'

function Home() {
  return (
    <>
      <Hero />
      <Stack />
      <Projects />
      <Experience />
      <Github />
    </>
  )
}

function App() {
  return (
    <AppProvider>
      <div
        id="top"
        className="min-h-screen bg-white text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50"
      >
        <Header />
        <div className="mx-auto max-w-3xl px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </AppProvider>
  )
}

export default App
