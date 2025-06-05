import DemoLayout from '@/components/docs/DemoLayout'

// Demo
import Basic from './Basic'
import Range from './Range'
import Disabled from './Disabled'
import SliderTootltip from './SliderTootltip'
import Marks from './Marks'
import Step from './Step'
import MinAndMax from './MinAndMax'
import CustomColor from './CustomColor'
import Controlled from './Controlled'

const mdPath = 'Slider'

const demoHeader = {
    title: 'Slider',
    desc: 'Slider is used to select a value within a range.',
}

const demos = [
    {
        mdName: 'Basic',
        mdPath: mdPath,
        title: 'Basic',
        desc: `Basic usage of Slider.`,
        component: <Basic />,
    },
    {
        mdName: 'Range',
        mdPath: mdPath,
        title: 'Range',
        desc: `Basic usage of Range Slider.`,
        component: <Range />,
    },
    {
        mdName: 'Disabled',
        mdPath: mdPath,
        title: 'Disabled',
        desc: `Make Slider inactive by setting the disabled prop.`,
        component: <Disabled />,
    },
    {
        mdName: 'Tooltip',
        mdPath: mdPath,
        title: 'Tooltips',
        desc: `Slider allow to show tooltip on hover or always showing.`,
        component: <SliderTootltip />,
    },
    {
        mdName: 'Marks',
        mdPath: mdPath,
        title: 'Marks',
        desc: `Slider can have marks under the bar using <code>marks</code> prop.`,
        component: <Marks />,
    },
    {
        mdName: 'Step',
        mdPath: mdPath,
        title: 'Step',
        desc: `<code>step</code> prop allows you to control the increment value when dragging the slider, it determines how the slider moves across different consistent values & <code>stepOnMarks</code> prop allows you to move slider across different inconsistent values`,
        component: <Step />,
    },
    {
        mdName: 'MinAndMax',
        mdPath: mdPath,
        title: 'Min and Max',
        desc: `By default, the slider has a minimum value of 0 and a maximum value of 100. <code>min</code> and <code>max</code> props allow you to set a custom minimum and maximum values of the slider.`,
        component: <MinAndMax />,
    },
    {
        mdName: 'CustomColor',
        mdPath: mdPath,
        title: 'Custom Color',
        desc: `We can customize the color of the slider using <code>classNames</code> props, applying classes to different parts of the slider.`,
        component: <CustomColor />,
    },
    {
        mdName: 'Controlled',
        mdPath: mdPath,
        title: 'Controlled',
        desc: `Controlled usage with <code> &lt;Slider /&gt;</code>`,
        component: <Controlled />,
    },
]

const demoApi = [
    {
        component: 'Slider',
        api: [
            {
                propName: 'alwaysShowTooltip',
                type: `<code>boolean</code>`,
                default: `-`,
                desc: 'Whether to showing tooltip all the time',
            },
            {
                propName: 'classNames',
                type: `<code>classNames?: { thumb?: string; bar?: string; mark?: string | ((isFilled: boolean) => string); track?: string }</code>`,
                default: `-`,
                desc: 'Class name for each part of slider',
            },
            {
                propName: 'defaultValue',
                type: `<code>number</code>`,
                default: `-`,
                desc: 'Default value of Slider (use value instead if it is controlled)',
            },
            {
                propName: 'disabled',
                type: `<code>boolean</code>`,
                default: `-`,
                desc: 'Whether to disable Slider',
            },
            {
                propName: 'inputProps',
                type: `<code>React.ComponentPropsWithoutRef<'input'></code>`,
                default: `-`,
                desc: 'Props for input element that behind the slider',
            },
            {
                propName: 'marks',
                type: `<code>{ value: number; label?: ReactNode | string }[]</code>`,
                default: `-`,
                desc: 'Marks metadata show under the bar',
            },
            {
                propName: 'max',
                type: `<code>number</code>`,
                default: `<code>100</code>`,
                desc: 'Maximum value of Slider',
            },
            {
                propName: 'min',
                type: `<code>number</code>`,
                default: `<code>0</code>`,
                desc: 'Minimum value of Slider',
            },
            {
                propName: 'name',
                type: `<code>string</code>`,
                default: `-`,
                desc: 'Name of input element that behind the slider',
            },
            {
                propName: 'onChange',
                type: `<code>(value: number) => void</code>`,
                default: `-`,
                desc: 'Callback when Slider value changed',
            },
            {
                propName: 'onDraggingStop',
                type: `<code>(value: number) => void</code>`,
                default: `-`,
                desc: 'Callback when dragging stop',
            },
            {
                propName: 'precision',
                type: `<code>number</code>`,
                default: `<code>-</code>`,
                desc: 'Precision of Slider value',
            },
            {
                propName: 'showTooltipOnHover',
                type: `<code>boolean</code>`,
                default: `<code>false</code>`,
                desc: 'Whether to show tooltip when hover',
            },
            {
                propName: 'step',
                type: `<code>number</code>`,
                default: `<code>1</code>`,
                desc: 'Increment value when dragging the slider',
            },
            {
                propName: 'stepOnMarks',
                type: `<code>boolean</code>`,
                default: `<code>false</code>`,
                desc: 'Whether to move slider across different inconsistent step values',
            },
            {
                propName: 'thumbAriaLabel',
                type: `<code>string</code>`,
                default: `-`,
                desc: 'Aria label of slider thumb',
            },
            {
                propName: 'tooltip',
                type: `<code>ReactNode | ((value: number) => ReactNode)</code>`,
                default: `-`,
                desc: 'Custom tooltip value of slider',
            },
            {
                propName: 'value',
                type: `<code>number</code>`,
                default: `-`,
                desc: 'Value of Slider',
            },
        ],
    },
    {
        component: 'Slider.Range',
        api: [
            {
                propName: 'alwaysShowTooltip',
                type: `<code>boolean</code>`,
                default: `-`,
                desc: 'Whether to showing tooltip all the time',
            },
            {
                propName: 'defaultValue',
                type: `<code>number</code>`,
                default: `-`,
                desc: 'Default value of Range Slider (use value instead if it is controlled)',
            },
            {
                propName: 'disabled',
                type: `<code>boolean</code>`,
                default: `-`,
                desc: 'Whether to disable Range Slider',
            },
            {
                propName: 'inputProps',
                type: `<code>React.ComponentPropsWithoutRef<'input'></code>`,
                default: `-`,
                desc: 'Props for input element that behind the slider',
            },
            {
                propName: 'marks',
                type: `<code>{ value: number; label?: ReactNode | string }[]</code>`,
                default: `-`,
                desc: 'Marks metadata show under the bar',
            },
            {
                propName: 'max',
                type: `<code>number</code>`,
                default: `<code>100</code>`,
                desc: 'Maximum value of Range Slider',
            },
            {
                propName: 'maxRange',
                type: `<code>number</code>`,
                default: `-`,
                desc: 'Maximum range interval of Range Slider',
            },
            {
                propName: 'min',
                type: `<code>number</code>`,
                default: `<code>0</code>`,
                desc: 'Minimum value of Range Slider',
            },
            {
                propName: 'minRange',
                type: `<code>number</code>`,
                default: `<code>0</code>`,
                desc: 'Minimum range interval of Range Slider',
            },
            {
                propName: 'name',
                type: `<code>string</code>`,
                default: `-`,
                desc: 'Name of input element that behind the slider',
            },
            {
                propName: 'precision',
                type: `<code>number</code>`,
                default: `<code>-</code>`,
                desc: 'Precision of Range Slider value',
            },
            {
                propName: 'onChange',
                type: `<code>(values: [number, number]) => void</code>`,
                default: `-`,
                desc: 'Callback when Range Slider value changed',
            },
            {
                propName: 'onDraggingStop',
                type: `<code>(values: [number, number]) => void</code>`,
                default: `-`,
                desc: 'Callback when dragging stop',
            },
            {
                propName: 'showTooltipOnHover',
                type: `<code>boolean</code>`,
                default: `<code>false</code>`,
                desc: 'Whether to show tooltip when hover',
            },
            {
                propName: 'step',
                type: `<code>number</code>`,
                default: `<code>1</code>`,
                desc: 'Increment value when dragging the slider',
            },
            {
                propName: 'stepOnMarks',
                type: `<code>boolean</code>`,
                default: `<code>false</code>`,
                desc: 'Whether to move slider across different inconsistent step values',
            },
            {
                propName: 'thumbAriaLabelStart',
                type: `<code>string</code>`,
                default: `-`,
                desc: 'Aria label of start slider thumb',
            },
            {
                propName: 'thumbAriaLabelEnd',
                type: `<code>string</code>`,
                default: `-`,
                desc: 'Aria label of end slider thumb',
            },
            {
                propName: 'tooltip',
                type: `<code>ReactNode | ((value: [number, number]) => ReactNode)</code>`,
                default: `-`,
                desc: 'Custom tooltip value of slider',
            },
            {
                propName: 'value',
                type: `<code>[number, number]</code>`,
                default: `-`,
                desc: 'Value of Range Slider',
            },
        ],
    },
]

const Segment = () => {
    return <DemoLayout header={demoHeader} demos={demos} api={demoApi} />
}

export default Segment
