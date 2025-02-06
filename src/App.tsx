import {
  About,
  Hero
} from "./components"

export const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About />
    </main>
  )
}
