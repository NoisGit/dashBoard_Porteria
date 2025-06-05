```jsx
import Slider from '@/components/ui/Slider'

const CustomColor = () => {
    return (
        <div className="flex flex-col gap-6">
            <Slider
                defaultValue={60}
                classNames={{
                    bar: 'bg-emerald-500',
                    mark: 'bg-emerald-500',
                    thumb: 'border-emerald-500',
                }}
            />
            <Slider.Range
                defaultValue={[20, 50]}
                classNames={{
                    bar: 'bg-linear-to-r from-indigo-600 to-[#be598a] to-[#ff6a55]',
                    mark: 'bg-indigo-600',
                    thumb: ['border-indigo-600', 'border-[#ff6a55]'],
                }}
            />
        </div>
    )
}

export default CustomColor
```
