import React from 'react'
import ThemeContext from './ThemeContext'

function Home() {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <div>
          <h1>Current theme: {theme}</h1>
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            Toggle Theme
          </button>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default Home
