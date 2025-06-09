import { useMemo, lazy, Suspense } from 'react'
import type { CommonProps } from '@/@types/common'
import type { LazyExoticComponent, JSX } from 'react'

// Define los tipos de layout disponibles
type LayoutType = 'simple' | 'split' | 'side'

// El mapeo de layouts a sus componentes
type Layouts = Record<
    LayoutType,
    LazyExoticComponent<(props: CommonProps) => JSX.Element>
>

// Si quieres cambiar el tipo de layout por defecto, cámbialo aquí:
const currentLayoutType: LayoutType = 'side'

const layouts: Layouts = {
    simple: lazy(() => import('./Simple')),
    split: lazy(() => import('./Split')),
    side: lazy(() => import('@/views/auth/SignIn/Side')),
}

const AuthLayout = ({ children }: CommonProps) => {
    // Solo resuelve el layout una vez
    const Layout = useMemo(() => layouts[currentLayoutType], [])

    return (
        <Suspense fallback={<div>Cargando layout...</div>}>
            <Layout>{children}</Layout>
        </Suspense>
    )
}

export default AuthLayout
