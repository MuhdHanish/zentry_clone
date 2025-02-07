import {
  NavBar,
  Footer,
} from "./components"

import {
  Hero,
  About,
  Features,
  Story,
  Contact,
} from "./components/sections"

export const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features /> 
      <Story />
      <Contact />
      <Footer />
    </main>
  )
}
