import { ForgotPasswordBase } from '@/views/auth/ForgotPassword'
import Side from '@/views/auth/SignIn/Side'

const ForgotPasswordDemoSide = () => {
    return (
        <Side>
            <ForgotPasswordBase signInUrl="/auth/sign-in-side" />
        </Side>
    )
}

export default ForgotPasswordDemoSide
