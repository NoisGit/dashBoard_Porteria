```jsx
import Pagination from '@/components/ui/Pagination'

const Basic = () => {
    const onPaginationChange = (page) => {
        console.log('onPaginationChange', page)
    }

    return (
        <div>
            <Pagination onChange={onPaginationChange} />
        </div>
    )
}

export default Basic
```
