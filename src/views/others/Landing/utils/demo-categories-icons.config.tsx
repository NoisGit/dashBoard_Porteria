import {
    PiSquaresFourDuotone,
    PiProjectorScreenChartDuotone,
    PiUserCircleDuotone,
    PiSparkleDuotone,
    PiQuestionDuotone,
    PiShieldCheckDuotone,
    PiShoppingCartSimpleDuotone,
    PiMegaphoneDuotone,
    PiAppWindowDuotone,
} from 'react-icons/pi'

export type ComponentIcons = Record<string, React.ReactNode>

const componentsIcon: ComponentIcons = {
    all: <PiSquaresFourDuotone />,
    ecommerce: <PiShoppingCartSimpleDuotone />,
    project: <PiProjectorScreenChartDuotone />,
    marketing: <PiMegaphoneDuotone />,
    ai: <PiSparkleDuotone />,
    helpCenter: <PiQuestionDuotone />,
    apps: <PiAppWindowDuotone />,
    accounts: <PiUserCircleDuotone />,
    auth: <PiShieldCheckDuotone />,
}

export default componentsIcon
