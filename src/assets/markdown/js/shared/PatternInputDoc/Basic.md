```jsx
import { useState } from 'react'
import PatternInput from '@/components/shared/PatternInput'

const Basic = () => {
    const [value, setValue] = useState(0)

    const handleValueChange = (e) => {
        console.log(e)
        setValue(e.floatValue)
    }

    return (
        <PatternInput
            value={value}
            format="### ###"
            onValueChange={handleValueChange}
        />
    )
}

export default Basic
```
