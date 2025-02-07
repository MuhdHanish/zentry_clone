import {
  NavBar,
} from "./components"

import {
  Hero,
  About,
  Features,
  Story,
} from "./components/sections"

export const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features /> 
      <Story />
    </main>
  )
}
