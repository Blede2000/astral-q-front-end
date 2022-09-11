import ApplicationLogo from '@/components/Utils/ApplicationLogo'
import AuthCard from '@/components/Cards/AuthCard'
// import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import { Alert, Box, Button, Text } from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons'

const VerifyEmail = () => {
    const { logout, resendEmailVerification } = useAuth({
        middleware: 'auth',
        redirectIfAuthenticated: '/dashboard',
    })

    const [status, setStatus] = useState(null)

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
                {status === 'verification-link-sent' && (
                    <Alert
                        icon={<IconAlertCircle size={16} />}
                        color="green"
                        my="xl"
                        styles={theme => ({
                            message: {
                                color: theme.colors.green[8],
                                paddingRight: 10,
                            },
                        })}>
                        A new verification link has been sent to the email
                        address you provided during registration.
                    </Alert>
                )}

                <Box mb="xl">
                    <Text size="sm" align="center">
                        Thanks for signing up! Before getting started, could you
                        verify your email address by clicking on the link we
                        just emailed to you? If you didn't receive the email, we
                        will gladly send you another.
                    </Text>
                </Box>

                <Box>
                    <Button
                        onClick={() => resendEmailVerification({ setStatus })}
                        fullWidth
                        variant="gradient"
                        mt={5}
                        sx={{ height: 45 }}
                        gradient={{ from: 'indigo', to: 'violet' }}>
                        Resend Verification Email
                    </Button>

                    <Button
                        onClick={logout}
                        fullWidth
                        type="button"
                        variant="subtle"
                        mt={5}
                        sx={{ height: 45 }}
                        color="violet">
                        Logout
                    </Button>
                </Box>
            </AuthCard>
        </GuestLayout>
    )
}

export default VerifyEmail
