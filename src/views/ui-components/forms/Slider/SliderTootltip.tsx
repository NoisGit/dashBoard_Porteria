import Slider from '@/components/ui/Slider'

const SliderTootltip = () => {
    return (
        <div className="flex flex-col gap-y-6">
            <div className="my-5 flex flex-col">
                <strong className="mb-2 text-gray-900 dark:text-white">
                    Show tooltip on hover
                </strong>
                <Slider showTooltipOnHover defaultValue={60} />
            </div>
            <div className="my-5 flex flex-col">
                <strong className="mb-2 text-gray-900 dark:text-white">
                    Always show tooltip
                </strong>
                <Slider alwaysShowTooltip defaultValue={60} />
            </div>
            <div className="my-5 flex flex-col">
                <strong className="mb-2 text-gray-900 dark:text-white">
                    Custom tooltip
                </strong>
                <Slider
                    showTooltipOnHover
                    tooltip={(value) => `${value}%`}
                    defaultValue={60}
                />
            </div>
        </div>
    )
}

export default SliderTootltip
