import { useState } from 'react'
import NavList from './NavList'
import Drawer from '@/components/ui/Drawer'
import classNames from '@/utils/classNames'
import useScrollTop from '@/utils/hooks/useScrollTop'
import { MODE_DARK, MODE_LIGHT } from '@/constants/theme.constant'
import { TbMenu2 } from 'react-icons/tb'
import type { Mode } from '@/@types/theme'

type NavigationProps = {
    toggleMode: () => void
    mode: Mode
}

const navMenu = [
    {
        title: 'Features',
        value: 'features',
        to: 'features',
    },
    {
        title: 'Demos',
        value: 'demos',
        to: 'demos',
    },
    {
        title: 'Components',
        value: 'components',
        to: 'components',
    },
    {
        title: 'Documentations',
        value: 'documentations',
        href: 'https://ecme-react.themenate.net/guide/documentation/introduction',
    },
]

const Navigation = ({ toggleMode, mode }: NavigationProps) => {
    const { isSticky } = useScrollTop()

    const [isOpen, setIsOpen] = useState(false)

    const openDrawer = () => {
        setIsOpen(true)
    }

    const onDrawerClose = () => {
        setIsOpen(false)
    }

    return (
        <div
            style={{ transition: 'all 0.2s ease-in-out' }}
            className={classNames(
                'w-full fixed inset-x-0 z-[50]',
                isSticky ? 'top-4' : 'top-0',
            )}
        >
            <div
                className={classNames(
                    'flex flex-row self-start items-center justify-between py-3 max-w-7xl mx-auto px-4 rounded-xl relative z-[60] w-full transition duration-200',
                    isSticky
                        ? 'bg-white dark:bg-gray-800 shadow-lg'
                        : 'bg-transparent dark:bg-transparent',
                )}
            >
                <button
                    className="flex lg:hidden items-center gap-4"
                    onClick={openDrawer}
                >
                    <TbMenu2 size={24} />
                </button>
                <Drawer
                    title="Navigation"
                    isOpen={isOpen}
                    width={250}
                    placement="left"
                    onClose={onDrawerClose}
                    onRequestClose={onDrawerClose}
                >
                    <div className="flex flex-col gap-4">
                        <NavList tabs={navMenu} onTabClick={onDrawerClose} />
                    </div>
                </Drawer>
                <a href="/">
                    {mode === MODE_LIGHT && (
                        <img
                            src="/img/logo/logo-light-full.png"
                            width={120}
                            height={40}
                            alt="logo"
                        />
                    )}
                    {mode === MODE_DARK && (
                        <img
                            src="/img/logo/logo-dark-full.png"
                            width={120}
                            height={40}
                            alt="logo"
                        />
                    )}
                </a>
                <div className="lg:flex flex-row flex-1 absolute inset-0 hidden items-center justify-center text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200 [perspective:1000px] overflow-auto sm:overflow-visible no-visible-scrollbar">
                    <NavList tabs={navMenu} />
                </div>
                <div className="flex items-center gap-2">
                    <button
                        className="relative flex cursor-pointer items-center justify-center rounded-xl p-2 text-neutral-500 hover:shadow-input dark:text-neutral-500"
                        onClick={toggleMode}
                    >
                        <svg
                            className="lucide lucide-sun rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                            fill="none"
                            height="16"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="12" cy="12" r="4" />
                            <path d="M12 2v2" />
                            <path d="M12 20v2" />
                            <path d="m4.93 4.93 1.41 1.41" />
                            <path d="m17.66 17.66 1.41 1.41" />
                            <path d="M2 12h2" />
                            <path d="M20 12h2" />
                            <path d="m6.34 17.66-1.41 1.41" />
                            <path d="m19.07 4.93-1.41 1.41" />
                        </svg>
                        <svg
                            className="lucide lucide-moon absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                            fill="none"
                            height="16"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                        </svg>
                        <span className="sr-only">Toggle theme</span>
                    </button>
                    <div className="border border-gray-200 dark:border-gray-700 rounded-full inline-flex items-center justify-center gap-2 py-1 px-2 bg-white dark:bg-gray-800">
                        <img
                            src="/img/landing/tech/vite.png"
                            alt="vite"
                            className="w-6 h-6"
                        />
                        <span className="heading-text">Vite</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation
