import classNames from '@/utils/classNames'
import type { ReactNode } from 'react'

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode
    showRadialGradient?: boolean
    auroraClassName?: string
}

const AuroraBackground = ({
    className,
    children,
    showRadialGradient = true,
    auroraClassName,
    ...props
}: AuroraBackgroundProps) => {
    return (
        <div
            className={classNames(
                'relative flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900  transition-bg',
                className,
            )}
            {...props}
        >
            <div
                className={classNames(
                    'absolute inset-0 overflow-hidden',
                    auroraClassName,
                )}
            >
                <div
                    className={classNames(
                        `[--white-gradient:repeating-linear-gradient(100deg,var(--color-white)_0%,var(--color-white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--color-white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--color-black)_0%,var(--color-black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--color-black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--color-purple-300)_10%,var(--color-fuchsia-200)_15%,var(--color-pink-200)_20%,var(--color-rose-300)_25%,var(--color-violet-400)_30%)]
            [--transparent:rgba(255,255,255,0)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,

                        showRadialGradient &&
                            `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
                    )}
                ></div>
            </div>
            {children}
        </div>
    )
}

export default AuroraBackground
