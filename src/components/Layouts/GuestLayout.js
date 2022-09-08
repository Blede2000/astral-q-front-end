import { Container, createStyles } from '@mantine/core'
import Head from 'next/head'

const GuestLayout = ({ children }) => {
    const { classes } = useStyles()

    return (
        <div className={classes.container}>
            <Head>
                <title>Laravel</title>
            </Head>

            <div>{children}</div>
        </div>
    )
}

const useStyles = createStyles((theme, _params, getRef) => ({
    container: {
        backgroundColor: theme.colors.gray[1],
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}))

export default GuestLayout
