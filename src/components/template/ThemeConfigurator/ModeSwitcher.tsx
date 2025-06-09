import { useThemeStore } from '@/store/themeStore'
import { FiSun, FiMoon } from 'react-icons/fi'

const ModeSwitcher = () => {
  const mode = useThemeStore((state) => state.mode)
  const setMode = useThemeStore((state) => state.setMode)

  const isDark = mode === 'dark'

  return (
    <button
      aria-label="Cambiar modo claro/oscuro"
      className={`relative w-14 h-8 rounded-full transition-colors
        ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}
        style={{ minWidth: 56 }}
        onClick={() => setMode(isDark ? 'light' : 'dark')}
    >
      <span
        className={`
          absolute top-1 left-1 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300
          ${isDark ? 'translate-x-6 bg-gray-800' : 'translate-x-0 bg-yellow-400'}
        `}
      >
        {isDark
          ? <FiMoon className="text-white" size={20} />
          : <FiSun className="text-yellow-500" size={20} />}
      </span>
    </button>
  )
}

export default ModeSwitcher
