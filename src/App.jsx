import { useState } from 'react'
import { Navbar, Hero, About, Stack, Projects, Contact, Footer } from './components/index'
import './scss/index.scss'

function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <div className="app" data-theme={theme}>
      <Navbar />
      <Hero toggleTheme={toggleTheme} theme={theme} />
      <About />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
