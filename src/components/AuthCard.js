import { Container, Paper } from '@mantine/core'

const AuthCard = ({ logo, children }) => (
    <Paper size={420} withBorder shadow="md" p={30} radius="md">
        <div>{logo}</div>

        {children}
    </Paper>
)

export default AuthCard
