import ApplicationLogo from '@/components/Utils/ApplicationLogo'
import AuthCard from '@/components/Cards/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import GuestLayout from '@/components/Layouts/GuestLayout'
import InputError from '@/components/Forms/InputError'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Button, PasswordInput, TextInput } from '@mantine/core'

const PasswordReset = () => {
    const router = useRouter()

    const { resetPassword } = useAuth({ middleware: 'guest' })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        event.preventDefault()

        resetPassword({
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
            setStatus,
        })
    }

    useEffect(() => {
        setEmail(router.query.email || '')
    }, [router.query.email])

    return (
        <GuestLayout>
            <AuthCard
                logo={
                    <Link href="/">
                        <a>
                            <ApplicationLogo width={120} height={120} />
                        </a>
                    </Link>
                }>
                {/* Session Status */}
                <AuthSessionStatus className="mb-4" status={status} />

                <form onSubmit={submitForm}>
                    {/* Email Address */}
                    <Box>
                        <TextInput
                            placeholder="Your email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            label="Email"
                            withAsterisk
                        />
                        <InputError messages={errors.email} />
                    </Box>

                    {/* Password */}
                    <Box mt={10}>
                        <PasswordInput
                            placeholder="Password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            label="Password"
                            autoComplete="new-password"
                            withAsterisk
                        />
                        <InputError messages={errors.password} />
                    </Box>

                    <Box mt={10}>
                        <PasswordInput
                            placeholder="Confirm Password"
                            value={passwordConfirmation}
                            onChange={event =>
                                setPasswordConfirmation(event.target.value)
                            }
                            label="Confirm Password"
                            withAsterisk
                        />
                        <InputError messages={errors.password_confirmation} />
                    </Box>

                    <Box mt="sm">
                        <Button
                            fullWidth
                            type="submit"
                            variant="gradient"
                            sx={{ height: 45 }}
                            gradient={{ from: 'indigo', to: 'violet' }}>
                            Sign in
                        </Button>
                    </Box>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default PasswordReset
