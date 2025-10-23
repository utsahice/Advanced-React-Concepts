import React from 'react'
import ThemeContext from './ThemeContext'
import './index.css'
function Home() {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <div className='max-w-sm mx-auto mt-16 p-6 bg-white rounded-lg shadow-md text-center'>
          <h1 className='text-2xl font-semibold mb-4 text-gray-800'>
            Current theme: <span className='font-bold'>{theme}</span>
          </h1>
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400'
          >
            Toggle Theme
          </button>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default Home
