```jsx
import { useState } from 'react'
import Button from '@/components/ui/Button'
import Radio from '@/components/ui/Radio'
import Drawer from '@/components/ui/Drawer'

const placementList = [
    { name: 'Top', value: 'top' },
    { name: 'Right', value: 'right' },
    { name: 'Bottom', value: 'bottom' },
    { name: 'Left', value: 'left' },
]

const Placement = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [placement, setPlacement] =
        useState < Direction > placementList[1].value

    const openDrawer = () => {
        setIsOpen(true)
    }

    const onDrawerClose = (e) => {
        console.log('onDrawerClose', e)
        setIsOpen(false)
    }

    const onPlacementChange = (val) => {
        setPlacement(val)
    }

    return (
        <div className="flex-wrap inline-flex xl:flex items-center gap-2">
            <Radio.Group value={placement} onChange={onPlacementChange}>
                {placementList.map((item) => (
                    <Radio key={item.value} value={item.value} id={item.value}>
                        {item.name}
                    </Radio>
                ))}
            </Radio.Group>
            <Button onClick={() => openDrawer()}>Open Drawer</Button>
            <Drawer
                title="Drawer Title"
                isOpen={isOpen}
                placement={placement}
                onClose={onDrawerClose}
                onRequestClose={onDrawerClose}
            >
                Drawer Content
            </Drawer>
        </div>
    )
}

export default Placement
```
