import classNames from '@/utils/classNames'
import React, { useEffect, useState, type ReactNode } from 'react'

const InfiniteMovingCards = ({
    items,
    direction = 'bottom',
    speed = 'fast',
    pauseOnHover = true,
    className,
    itemCallback,
}: {
    items: {
        id: string
        name: string
        link: string
    }[]
    direction?: 'top' | 'bottom'
    speed?: 'fast' | 'normal' | 'slow'
    pauseOnHover?: boolean
    className?: string
    itemCallback: (item: {
        id: string
        name: string
        link: string
    }) => ReactNode
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const scrollerRef = React.useRef<HTMLUListElement>(null)

    useEffect(() => {
        addAnimation()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const [start, setStart] = useState(false)
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children)

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true)
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem)
                }
            })

            getDirection()
            getSpeed()
            setStart(true)
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === 'top') {
                containerRef.current.style.setProperty(
                    '--animation-direction',
                    'forwards',
                )
            } else {
                containerRef.current.style.setProperty(
                    '--animation-direction',
                    'reverse',
                )
            }
        }
    }
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === 'fast') {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '20s',
                )
            } else if (speed === 'normal') {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '40s',
                )
            } else {
                containerRef.current.style.setProperty(
                    '--animation-duration',
                    '80s',
                )
            }
        }
    }
    return (
        <div
            ref={containerRef}
            className={classNames(
                'scroller relative z-20  overflow-hidden  [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]',
                className,
            )}
        >
            <ul
                ref={scrollerRef}
                className={classNames(
                    'flex flex-col min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap',
                    start && 'animate-scroll ',
                    pauseOnHover && 'animation-play-state-paused',
                )}
            >
                {items.map((item) => (
                    <li key={item.name} className="">
                        {itemCallback(item)}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default InfiniteMovingCards
