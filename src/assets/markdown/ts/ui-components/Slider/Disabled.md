```jsx
import Slider from '@/components/ui/Slider'

const Disabled = () => {
    return (
        <div className="flex flex-col gap-6">
            <Slider disabled defaultValue={60} />
            <Slider.Range disabled defaultValue={[20, 50]} />
        </div>
    )
}

export default Disabled
```
