import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import DarkModeToggle from 'react-dark-mode-toggle'

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  const toggleMode = () => (theme === 'light' ? setTheme('dark') : setTheme('light'))

  if (!mounted) return null

  return (
    <DarkModeToggle
      className="focus:outline-none dark:ring-inset dark:ring-1 rounded-full"
      onChange={toggleMode}
      checked={theme === 'light' ? false : true}
      size={55}
    />
  )
}

export default ThemeChanger
