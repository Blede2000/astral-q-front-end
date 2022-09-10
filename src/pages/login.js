import ApplicationLogo from '@/components/Utils/ApplicationLogo'
import AuthCard from '@/components/Cards/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import GuestLayout from '@/components/Layouts/GuestLayout'
import InputError from '@/components/Forms/InputError'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Group,
    Button,
    Box,
} from '@mantine/core'

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
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
                {/* Session Status */}
                <AuthSessionStatus status={status} />

                <form onSubmit={submitForm}>
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
                        <PasswordInput
                            placeholder="Password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            label="Password"
                            withAsterisk
                        />
                        <InputError messages={errors.password} />
                    </Box>

                    <Box mt={35}>
                        <Group position="apart" mt="md">
                            <Checkbox
                                label="Remember me"
                                name="remember"
                                checked={shouldRemember}
                                onChange={event =>
                                    setShouldRemember(event.target.checked)
                                }
                            />
                            <Link href="/forgot-password">
                                <Anchor size="sm" color="violet">
                                    Forgot your password?
                                </Anchor>
                            </Link>
                        </Group>
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

export default Login
