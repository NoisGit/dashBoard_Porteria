import { SignInBase } from '@/views/auth/SignIn'
import Side from '@/views/auth/SignIn/Side'

const SignInDemoSide = () => {
    return (
        <Side>
            <SignInBase
                disableSubmit={true}
            />
        </Side>
    )
}

export default SignInDemoSide
