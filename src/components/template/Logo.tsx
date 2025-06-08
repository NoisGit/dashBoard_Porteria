import classNames from 'classnames'
import porteria from '@/assets/porteria-icon.png'
import porteriaWhite from '@/assets/porteria-white.png'
import { useThemeStore } from '@/store/themeStore'
import { APP_NAME } from '@/constants/app.constant'
import type { CommonProps } from '@/@types/common'

interface LogoProps extends CommonProps {
    type?: 'full' | 'streamline'
    mode?: 'light' | 'dark'
    imgClass?: string
    logoWidth?: number | string
}

const Logo = (props: LogoProps) => {
    const { className, imgClass, style, logoWidth = 'auto', mode } = props
    const themeMode = useThemeStore((state) => state.mode)
    const isDark = (mode ? mode : themeMode) === 'dark'


    return (
        <div
            className={classNames('logo', className)}
            style={{
                ...style,
                width: logoWidth,
            }}
        >
            <img
                className={imgClass}
                src={isDark ? porteriaWhite : porteria}
                alt={`${APP_NAME} logo`}
                style={{ transition: 'filter 0.3s' }}
            />
        </div>
    )
}

export default Logo
