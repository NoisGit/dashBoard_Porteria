import { useEffect } from 'react'
import { motion, stagger, useAnimate } from 'framer-motion'
import classNames from '@/utils/classNames'

const TextGenerateEffect = ({
    words,
    className,
    wordClassName,
    filter = true,
    duration = 0.5,
    wordsCallbackClass,
}: {
    words: string
    className?: string
    wordClassName?: string
    filter?: boolean
    duration?: number
    wordsCallbackClass?: (payload: { word: string }) => string
}) => {
    const [scope, animate] = useAnimate()
    const wordsArray = words.split(' ')
    useEffect(() => {
        animate(
            'span',
            {
                opacity: 1,
                filter: filter ? 'blur(0px)' : 'none',
            },
            {
                duration: duration ? duration : 1,
                delay: stagger(0.075),
            },
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scope.current])

    const renderWords = () => {
        return (
            <motion.div ref={scope} className={wordClassName}>
                {wordsArray.map((word, idx) => {
                    return (
                        <motion.span
                            key={word + idx}
                            className={classNames(
                                'opacity-0',
                                wordsCallbackClass &&
                                    wordsCallbackClass({ word }),
                            )}
                            style={{
                                filter: filter ? 'blur(10px)' : 'none',
                            }}
                        >
                            {word}{' '}
                        </motion.span>
                    )
                })}
            </motion.div>
        )
    }

    return (
        <div className={classNames('font-bold', className)}>
            <div className="mt-4">
                <div className=" dark:text-white text-black text-2xl leading-snug">
                    {renderWords()}
                </div>
            </div>
        </div>
    )
}

export default TextGenerateEffect
