import Container from './LandingContainer'
import { motion } from 'framer-motion'
import { Link } from 'react-router'
import componentsIcons from '../utils/components-icons.config'

const componentItems1 = [
    { id: 'uiCommonButton', name: 'Button', link: 'button' },
    { id: 'uiCommonGrid', name: 'Grid', link: 'grid' },
    { id: 'uiCommonTypography', name: 'Typography', link: 'typography' },
    { id: 'uiCommonIcons', name: 'Icons', link: 'icons' },
    { id: 'uiGraphChart', name: 'Chart', link: 'chart' },
    { id: 'uiGraphMaps', name: 'Maps', link: 'maps' },
]

const componentItems2 = [
    { id: 'uiFeedbackAlert', name: 'Alert', link: 'alert' },
    { id: 'uiFeedbackDialog', name: 'Dialog', link: 'dialog' },
    { id: 'uiFeedbackDrawer', name: 'Drawer', link: 'drawer' },
    { id: 'uiFeedbackProgress', name: 'Progress', link: 'progress' },
    { id: 'uiFeedbackSkeleton', name: 'Skeleton', link: 'skeleton' },
    { id: 'uiFeedbackSpinner', name: 'Spinner', link: 'spinner' },
    { id: 'uiFeedbackToast', name: 'Toast', link: 'toast' },
    { id: 'uiDataDisplayAvatar', name: 'Avatar', link: 'avatar' },
    { id: 'uiDataDisplayBadge', name: 'Badge', link: 'badge' },
    { id: 'uiDataDisplayCalendar', name: 'Calendar', link: 'calendar' },
    { id: 'uiDataDisplayCard', name: 'Card', link: 'card' },
    { id: 'uiDataDisplayTable', name: 'Table', link: 'table' },
    { id: 'uiDataDisplayTag', name: 'Tag', link: 'tag' },
    { id: 'uiDataDisplayTimeline', name: 'Timeline', link: 'timeline' },
    { id: 'uiDataDisplayTooltip', name: 'Tooltip', link: 'tooltip' },
    { id: 'uiFormsCheckbox', name: 'Checkbox', link: 'checkbox' },
    { id: 'uiFormsDatepicker', name: 'Datepicker', link: 'datepicker' },
    { id: 'uiFormsFormControl', name: 'Form Control', link: 'form-control' },
    { id: 'uiFormsInput', name: 'Input', link: 'input' },
    { id: 'uiFormsInputGroup', name: 'Input Group', link: 'input-group' },
    { id: 'uiFormsRadio', name: 'Radio', link: 'radio' },
    { id: 'uiFormsSegment', name: 'Segment', link: 'segment' },
    { id: 'uiFormsSelect', name: 'Select', link: 'select' },
    { id: 'uiFormsSwitcher', name: 'Switcher', link: 'switcher' },
    { id: 'uiFormsTimePicker', name: 'Time Picker', link: 'time-picker' },
    { id: 'uiFormsUpload', name: 'Upload', link: 'upload' },
    { id: 'uiNavigationDropdown', name: 'Dropdown', link: 'dropdown' },
    { id: 'uiNavigationMenu', name: 'Menu', link: 'menu' },
    { id: 'uiNavigationPagination', name: 'Pagination', link: 'pagination' },
    { id: 'uiNavigationSteps', name: 'Steps', link: 'steps' },
    { id: 'uiNavigationTabs', name: 'Tabs', link: 'tabs' },
]

const Components = () => {
    const renderComponentIcon = (item: {
        id: string
        name: string
        link: string
    }) => {
        return (
            <Link
                to={`/ui-components/${item.link}`}
                className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 flex flex-col items-center justify-center rounded-2xl h-32 gap-4"
            >
                <span className="text-primary text-4xl">
                    {componentsIcons[item.id]}
                </span>
                <div className="heading-text font-bold">{item.name}</div>
            </Link>
        )
    }

    return (
        <div id="components" className="relative z-20 py-10 md:py-40">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-8 gap-4">
                    <motion.div
                        className="col-span-5 flex flex-col justify-center"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.3,
                            type: 'spring',
                            bounce: 0.1,
                        }}
                        viewport={{ once: true }}
                    >
                        <motion.h2 className="mb-8 max-w-[650px] leading-[1.3] text-5xl">
                            Explore a Rich Collection of UI Components
                        </motion.h2>
                        <motion.p className="max-w-[600px]">
                            Each component is carefully crafted using
                            TailwindCSS, making it flexible, customizable, and
                            easy to integrate into your project with minimal
                            setup.
                        </motion.p>
                    </motion.div>
                    <div className="col-span-5 sm:col-span-3">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {componentItems1.map((item) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.3,
                                        type: 'spring',
                                        bounce: 0.1,
                                    }}
                                    viewport={{ once: true }}
                                >
                                    {renderComponentIcon(item)}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-4 mt-4">
                    {componentItems2.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{
                                duration: 0.3,
                                type: 'spring',
                                bounce: 0.1,
                            }}
                            viewport={{ once: true }}
                        >
                            {renderComponentIcon(item)}
                        </motion.div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Components
