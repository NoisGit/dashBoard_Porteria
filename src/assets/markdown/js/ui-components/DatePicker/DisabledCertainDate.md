```jsx
import { useState } from 'react'
import DatePicker from '@/components/ui/DatePicker'

const DisabledCertainDate = () => {
    const [dateValue, setDateValue] = useState(new Date())

    const onCertainPeriodChange = (date) => {
        setDateValue(date)
    }

    const disableCertainDate = (date) => {
        const banDate = [7, 15, 21]
        return banDate.includes(date.getDate())
    }

    return (
        <DatePicker
            value={dateValue}
            placeholder="Pick your date"
            disableDate={disableCertainDate}
            onChange={(date) => onCertainPeriodChange(date)}
        />
    )
}

export default DisabledCertainDate
```
