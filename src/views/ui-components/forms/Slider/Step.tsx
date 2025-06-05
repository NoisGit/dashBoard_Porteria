import Slider from '@/components/ui/Slider'

const marks1 = [
    { value: 0, label: '0°C' },
    { value: 25, label: '25°C' },
    { value: 50, label: '50°C' },
    { value: 75, label: '75°C' },
    { value: 100, label: '100°C' },
]

const marks2 = [
    { value: 0, label: '0°C' },
    { value: 26, label: '26°C' },
    { value: 37, label: '37°C' },
    { value: 100, label: '100°C' },
]

const Step = () => {
    return (
        <div className="flex flex-col gap-10">
            <div className="my-5 mx-3">
                <Slider
                    defaultValue={marks1[1].value}
                    tooltip={(val) =>
                        marks1.find((mark) => mark.value === val)!.label
                    }
                    step={25}
                    marks={marks1}
                />
            </div>
            <div className="my-5 mx-3">
                <Slider
                    stepOnMarks
                    defaultValue={marks2[1].value}
                    tooltip={(val) =>
                        marks2.find((mark) => mark.value === val)!.label
                    }
                    marks={marks2}
                />
            </div>
        </div>
    )
}

export default Step
