import { lazy } from 'react'
import { DASHBOARDS_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { Routes } from '@/@types/routes'

const dashboardsRoute: Routes = [
    {
        key: 'dashboard.dashboard',
        path: `${DASHBOARDS_PREFIX_PATH}`, // Ahora esto es '/dashboard'
        component: lazy(() => import('@/views/dashboards/EcommerceDashboard')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'dashboard.project',
        path: `${DASHBOARDS_PREFIX_PATH}/project`,
        component: lazy(() => import('@/views/dashboards/ProjectDashboard')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'dashboard.marketing',
        path: `${DASHBOARDS_PREFIX_PATH}/marketing`,
        component: lazy(() => import('@/views/dashboards/MarketingDashboard')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
        },
    },
    {
        key: 'dashboard.analytic',
        path: `${DASHBOARDS_PREFIX_PATH}/analytic`,
        component: lazy(() => import('@/views/dashboards/AnalyticDashboard')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'contained',
            pageBackgroundType: 'plain',
        },
    },
]

export default dashboardsRoute
