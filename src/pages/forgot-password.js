import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import GuestLayout from '@/components/Layouts/GuestLayout'
import InputError from '@/components/InputError'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import { Box, Button, Text, TextInput, Title } from '@mantine/core'

const ForgotPassword = () => {
    const { forgotPassword } = useAuth({ middleware: 'guest' })

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        event.preventDefault()

        forgotPassword({ email, setErrors, setStatus })
    }

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
                <Box mb={25}>
                    <Title align="center" order={1} size={26}>
                        Forgot your password?
                    </Title>
                    <Text color="dimmed" size="sm" align="center">
                        Enter your email to get a reset link
                    </Text>
                </Box>

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
                    <Box mt={10}>
                        <Button
                            fullWidth
                            type="submit"
                            variant="gradient"
                            mt={5}
                            sx={{ height: 45 }}
                            gradient={{ from: 'indigo', to: 'violet' }}>
                            Email Password Reset Link
                        </Button>
                    </Box>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default ForgotPassword
