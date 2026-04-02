import { Suspense, lazy } from 'react'

const About = lazy(() => import('./components/About'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skilss'))
const Resume = lazy(() => import('./components/Resume'))
const Contact = lazy(() => import('./components/Contact'))

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Prashasti Dhanorkar's Portfolio</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <About />
        <Projects />
        <Skills />
        <Resume/>
        <Contact />
      </Suspense>
    </div>
  )
}