import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <About/>
      <Work/>
      <Skill/>
      <Contact/>
    </main>
    </>
  )
}

export default App;