
import useLocalStorage from 'use-local-storage'
import './scss/index.scss'

function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <div className="app" data-theme={theme}>
      <button onClick={switchTheme} >Toggle Me</button>
      <h1>Hello there</h1>
    </div>
  )
}

export default App
