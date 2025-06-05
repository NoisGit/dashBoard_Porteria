import { useState } from 'react'
import Slider from '@/components/ui/Slider'

const Controlled = () => {
    const [sliderValue, setSliderValue] = useState(50)
    const [rangeSliderValue, setRangeSliderValue] = useState<[number, number]>([
        20, 50,
    ])

    return (
        <div className="flex flex-col gap-5">
            <div className="my-5">
                <Slider value={sliderValue} onChange={setSliderValue} />
                <div className="mt-2">
                    Slider value: <strong>{sliderValue}</strong>
                </div>
            </div>
            <div className="my-5">
                <Slider.Range
                    value={rangeSliderValue}
                    onChange={setRangeSliderValue}
                />
                <div className="mt-2">
                    Range slider value:{' '}
                    <strong>{JSON.stringify(rangeSliderValue)}</strong>
                </div>
            </div>
        </div>
    )
}

export default Controlled
