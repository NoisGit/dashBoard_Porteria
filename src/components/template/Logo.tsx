import classNames from 'classnames'
import porteria from '@/assets/porteria-icon.png'
import porteriaWhite from '@/assets/porteria-white.png'
import { useThemeStore } from '@/store/themeStore'
import { APP_NAME } from '@/constants/app.constant'
import { Link } from 'react-router-dom'
import type { CommonProps } from '@/@types/common'

interface LogoProps extends CommonProps {
    type?: 'full' | 'streamline'
    mode?: 'light' | 'dark'
    imgClass?: string
    logoWidth?: number | string
    disableLink?: boolean // Nuevo prop opcional
}

const Logo = (props: LogoProps) => {
    const {
        className,
        imgClass,
        style,
        logoWidth = 'auto',
        mode,
        disableLink = false,
    } = props
    const themeMode = useThemeStore((state) => state.mode)
    const isDark = (mode ? mode : themeMode) === 'dark'

    const logoImg = (
        <img
            className={imgClass}
            src={isDark ? porteriaWhite : porteria}
            alt={`${APP_NAME} logo`}
            style={{ transition: 'filter 0.3s' }}
        />
    )

    const logoContent = (
        <div
            className={classNames('logo', className)}
            style={{
                ...style,
                width: logoWidth,
            }}
        >
            {logoImg}
        </div>
    )

    // Si disableLink está true, solo renderiza el logo sin link
    // Si está false (default), lo envuelve en un <Link>
    return disableLink ? logoContent : (
        <Link to="/dashboards">
            {logoContent}
        </Link>
    )
}

export default Logo
