import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
// import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/GuestLayout'
// import Input from '@/components/Input'
import InputError from '@/components/InputError'
// import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
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

                    <Box>
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

                    <Box mt="xl">
                        <Button
                            fullWidth
                            variant="gradient"
                            gradient={{ from: 'indigo', to: 'violet' }}>
                            Sign in
                        </Button>
                    </Box>

                    {/* Remember Me */}
                    {/* <div className="block mt-4">
                        <label
                            htmlFor="remember_me"
                            className="inline-flex items-center">
                            <input
                                id="remember_me"
                                type="checkbox"
                                name="remember"
                                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                onChange={event =>
                                    setShouldRemember(event.target.checked)
                                }
                            />

                            <span className="ml-2 text-sm text-gray-600">
                                Remember me
                            </span>
                        </label>
                    </div> */}

                    {/* <div className="flex items-center justify-end mt-4">
                        <Link href="/forgot-password">
                            <a className="underline text-sm text-gray-600 hover:text-gray-900">
                                Forgot your password?
                            </a>
                        </Link>

                        <Button className="ml-3">Login</Button>
                    </div> */}
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default Login
