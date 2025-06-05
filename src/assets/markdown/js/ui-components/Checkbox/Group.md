```jsx
import { useState } from 'react'
import Checkbox from '@/components/ui/Checkbox'

const Group = () => {
    const [checkboxList, setCheckboxList] = useState(['Selection A'])

    const onCheckboxChange = (options, e) => {
        console.log('Checkbox change', options, e)
        setCheckboxList(options)
    }

    return (
        <div>
            <Checkbox.Group value={checkboxList} onChange={onCheckboxChange}>
                <Checkbox value="Selection A">Selection A </Checkbox>
                <Checkbox value="Selection B">Selection B </Checkbox>
                <Checkbox value="Selection C">Selection C </Checkbox>
            </Checkbox.Group>
        </div>
    )
}

export default Group
```
