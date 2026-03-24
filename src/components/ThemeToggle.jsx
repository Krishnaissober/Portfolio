import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '../utils/utils'

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  return (
    <div>
      <button
        onClick={() => setIsDarkMode((prev) => !prev)}
        className={cn('fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full', 'focus:outline-none')}
        type='button'
      >
        {isDarkMode ? (
          <Sun className='h-6 w-6 text-yellow-300' />
        ) : (
          <Moon className='h-6 w-6 text-slate-400' />
        )}
      </button>
    </div>
  )
}

export default ThemeToggle
