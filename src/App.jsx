import { useState } from 'react'
import './scss/index.scss'

function App() {
  const [theme, setTheme] = useState('light');

  function toggleTheme(){
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <div data-theme={theme}>
      <h1>Hello there</h1>
    </div>
  )
}

export default App
