import {
  Hero,
  About,
  NavBar,
  Features
} from "./components"

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
