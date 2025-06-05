import HeroContent from './components/HeroContent'
import NavigationBar from './components/NavigationBar'
import Features from './components/Features'
import Demos from './components/Demos'
import TechStack from './components/TechStack'
import OtherFeatures from './components/OtherFeatures'
import Components from './components/Components'
import LandingFooter from './components/LandingFooter'
import { useThemeStore } from '@/store/themeStore'
import useDarkMode from '@/utils/hooks/useDarkMode'
import { MODE_DARK, MODE_LIGHT } from '@/constants/theme.constant'

const Landing = () => {
    const [isDark, setMode] = useDarkMode()

    const mode = isDark ? MODE_DARK : MODE_LIGHT

    const schema = useThemeStore((state) => state.themeSchema)
    const setSchema = useThemeStore((state) => state.setSchema)

    const toggleMode = () => {
        setMode(mode === MODE_LIGHT ? MODE_DARK : MODE_LIGHT)
    }

    return (
        <main className="px-4 lg:px-0 text-base">
            <NavigationBar toggleMode={toggleMode} mode={mode} />
            <div className="relative">
                <div
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='50' height='50' fill='none' stroke='${mode === MODE_LIGHT ? 'rgb(0 0 0 / 0.04)' : 'rgb(255 255 255 / 0.04)'}'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
                    }}
                    className="absolute inset-0 [mask-image:linear-gradient(to_bottom,white_5%,transparent_70%)] pointer-events-none select-none"
                ></div>
                <HeroContent mode={mode} />
            </div>
            <Features
                mode={mode}
                schema={schema}
                setSchema={setSchema}
                onModeChange={(value) => setMode(value ? 'dark' : 'light')}
            />
            <Demos mode={mode} />
            <TechStack />
            <OtherFeatures />
            <Components />
            <LandingFooter mode={mode} />
        </main>
    )
}

export default Landing
