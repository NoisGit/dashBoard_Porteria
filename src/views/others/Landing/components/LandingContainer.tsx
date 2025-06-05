import { forwardRef, ElementType } from 'react'
import classNames from '@/utils/classNames'
import { CommonProps } from '@/@types/common'

interface ContainerProps extends CommonProps {
    asElement?: ElementType
}

const Container = forwardRef((props: ContainerProps, ref) => {
    const { className, children, asElement: Component = 'div', ...rest } = props

    return (
        <Component
            ref={ref}
            className={classNames('max-w-7xl mx-auto px-4', className)}
            {...rest}
        >
            {children}
        </Component>
    )
})

Container.displayName = 'Container'

export default Container
