```jsx
import Switcher from '@/components/ui/Switcher'

const Basic = () => {
    const onSwitcherToggle = (val, e) => {
        console.log(val, e)
    }

    return (
        <div>
            <Switcher defaultChecked onChange={onSwitcherToggle} />
        </div>
    )
}

export default Basic
```
