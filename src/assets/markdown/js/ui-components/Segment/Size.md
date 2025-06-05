```jsx
import { useState } from 'react'
import Segment from '@/components/ui/Segment'

const Size = () => {
    const [size, setSize] = useState('md')

    const onSizeChange = (val) => {
        setSize(val)
    }

    return (
        <Segment
            size={size}
            value={size}
            onChange={(value) => onSizeChange(value)}
        >
            <Segment.Item value="xs">Extra Small</Segment.Item>
            <Segment.Item value="sm">Small</Segment.Item>
            <Segment.Item value="md">Medium</Segment.Item>
            <Segment.Item value="lg">Large</Segment.Item>
        </Segment>
    )
}

export default Size
```
