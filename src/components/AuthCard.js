import { Box, Center, Container, Paper, createStyles } from '@mantine/core'

const AuthCard = ({ logo, children }) => {
    const { classes } = useStyles()

    return (
        <Paper
            withBorder
            p={30}
            shadow="md"
            radius="lg"
            className={classes.card}>
            <Center mb={50}>{logo}</Center>

            {children}
        </Paper>
    )
}

const useStyles = createStyles((theme, _params, getRef) => ({
    card: {
        width: 450,
    },
}))

export default AuthCard
