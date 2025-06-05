```jsx
import { useState } from 'react'
import NumericInput from '@/components/shared/NumericInput'

const Basic = () => {
    const [value, setValue] = useState(0)

    const handleValueChange = (e) => {
        console.log(e)
        setValue(e.floatValue)
    }

    return (
        <NumericInput
            fixedDecimalScale
            value={value}
            decimalScale={2}
            onValueChange={handleValueChange}
        />
    )
}

export default Basic
```
