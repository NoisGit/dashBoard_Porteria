```jsx
import { useState } from 'react'
import Avatar from '@/components/ui/Avatar'
import Upload from '@/components/ui/Upload'
import { HiOutlinePlus } from 'react-icons/hi'

const AvatarImage = () => {
    const [avatarImg, setAvatarImg] = useState(null)

    const onFileUpload = (files) => {
        if (files.length > 0) {
            setAvatarImg(URL.createObjectURL(files[0]))
        }
    }

    const beforeUpload = (files) => {
        let valid = true

        const allowedFileType = ['image/jpeg', 'image/png']
        if (files) {
            for (const file of files) {
                if (!allowedFileType.includes(file.type)) {
                    valid = 'Please upload a .jpeg or .png file!'
                }
            }
        }

        return valid
    }

    return (
        <div>
            <Upload
                className="cursor-pointer"
                showList={false}
                uploadLimit={1}
                beforeUpload={beforeUpload}
                onChange={onFileUpload}
            >
                <Avatar size={80} src={avatarImg} icon={<HiOutlinePlus />} />
            </Upload>
        </div>
    )
}

export default AvatarImage
```
