import ApplicationLogo from '@/components/Utils/ApplicationLogo'
import AuthCard from '@/components/Cards/AuthCard'
import GuestLayout from '@/components/Layouts/GuestLayout'
import InputError from '@/components/Forms/InputError'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import { Anchor, Box, Button, PasswordInput, TextInput } from '@mantine/core'

const Register = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
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
                <form onSubmit={submitForm}>
                    <Box>
                        <TextInput
                            placeholder="Your name"
                            value={name}
                            onChange={event => setName(event.target.value)}
                            label="Name"
                            withAsterisk
                        />
                        <InputError messages={errors.name} />
                    </Box>

                    <Box mt={10}>
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

                    <Box mt={35}>
                        <Link href="/login">
                            <Anchor size="sm" color="violet">
                                Already registered?
                            </Anchor>
                        </Link>
                        <Button
                            fullWidth
                            type="submit"
                            variant="gradient"
                            mt={5}
                            sx={{ height: 45 }}
                            gradient={{ from: 'indigo', to: 'violet' }}>
                            Register
                        </Button>
                    </Box>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default Register
