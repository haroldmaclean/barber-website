'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const darkPref =
      window.localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    setIsDark(darkPref)
    document.documentElement.classList.toggle('dark', darkPref)
  }, [])

  const toggleTheme = () => {
    const newMode = !isDark
    setIsDark(newMode)
    document.documentElement.classList.toggle('dark', newMode)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label='Toggle Theme'
      className='p-2 rounded-full bg-yellow-400 dark:bg-gray-800 hover:bg-yellow-300 dark:hover:bg-gray-700 transition-all duration-300 shadow-md'
    >
      {isDark ? (
        <Sun className='w-6 h-6 text-yellow-300' />
      ) : (
        <Moon className='w-6 h-6 text-gray-800' />
      )}
    </button>
  )
}
