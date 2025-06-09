import { lazy } from 'react'
import type { Routes } from '@/@types/routes'

const authRoute: Routes = [
    {
        key: 'signIn',
        path: `/auth/sign-in`,
        component: lazy(() => import('@/views/auth/SignIn')),
        authority: [],
    },
    {
        key: 'forgotPassword',
        path: `/auth/forgot-password`,
        component: lazy(() => import('@/views/auth/ForgotPassword')),
        authority: [],
    },
    {
        key: 'resetPassword',
        path: `/auth/reset-password`,
        component: lazy(() => import('@/views/auth/ResetPassword')),
        authority: [],
    },
    {
        key: 'otpVerification',
        path: `/auth/otp-verification`,
        component: lazy(() => import('@/views/auth/OtpVerification')),
        authority: [],
    },
]

export default authRoute
