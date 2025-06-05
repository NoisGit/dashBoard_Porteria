import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const othersNavigationConfig: NavigationTree[] = [
    {
        key: 'others',
        path: '',
        title: 'Others',
        translateKey: 'nav.others.others',
        icon: 'others',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        subMenu: [
            {
                key: 'others.accessDenied',
                path: `/access-denied`,
                title: 'Access Denied',
                translateKey: 'nav.others.accessDenied',
                icon: 'accessDenied',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.others.accessDeniedDesc',
                        label: 'Access denied page',
                    },
                },
                subMenu: [],
            },
            {
                key: 'others.landing',
                path: `/landing`,
                title: 'Landing',
                translateKey: 'nav.others.landing',
                icon: 'landing',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [ADMIN, USER],
                meta: {
                    description: {
                        translateKey: 'nav.others.landingDesc',
                        label: 'Shared component usage',
                    },
                },
                subMenu: [],
            },
        ],
    },
]

export default othersNavigationConfig
