import classNames from 'classnames'
import porteria from '@/assets/porteria.svg'
import porteriaIcon from '@/assets/porteria-icon.png'
import { APP_NAME } from '@/constants/app.constant'
import type { CommonProps } from '@/@types/common'

interface LogoProps extends CommonProps {
    onlyIcon?: boolean
    imgClass?: string
    logoWidth?: number | string
}

const Logo = (props: LogoProps) => {
    const {
        className,
        imgClass,
        style,
        logoWidth = 'auto',
        onlyIcon = false,
    } = props

    const maxSize = onlyIcon ? 80 : 48 

    return (
        <div
            className={classNames('logo', className, 'flex items-center justify-center')}
            style={{
                ...style,
                width: logoWidth,
                height: onlyIcon ? '90px' : '90px',
            }}
        >
            <img
                className={imgClass}
                src={onlyIcon ? porteriaIcon : porteria}
                alt={`${APP_NAME} logo`}
                style={{
                    maxHeight: `${maxSize}px`,
                    width: onlyIcon ? `${maxSize}px` : 'auto',
                    minWidth: onlyIcon ? `${maxSize - 12}px` : undefined,
                    objectFit: 'contain'
                }}
            />
        </div>
    )
}

export default Logo
