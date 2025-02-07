import {
  NavBar,
} from "./components"

import {
  About,
  Hero,
  Features,
} from "./components/sections"

export const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features /> 
    </main>
  )
}
