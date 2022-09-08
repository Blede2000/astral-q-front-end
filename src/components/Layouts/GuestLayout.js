import { createStyles, ActionIcon, useMantineColorScheme } from '@mantine/core'
import Head from 'next/head'
import { IconSun, IconMoonStars } from '@tabler/icons'

const GuestLayout = ({ children }) => {
    const { classes } = useStyles()
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    const dark = colorScheme === 'dark'

    return (
        <div className={classes.container}>
            <Head>
                <title>Laravel</title>
            </Head>

            <ActionIcon
                sx={{ position: 'absolute', bottom: 25, right: 25 }}
                size="xl"
                variant="filled"
                color={dark ? 'yellow' : 'blue'}
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme">
                {dark ? <IconSun size={20} /> : <IconMoonStars size={20} />}
            </ActionIcon>

            <div>{children}</div>
        </div>
    )
}

const useStyles = createStyles((theme, _params, getRef) => ({
    container: {
        backgroundColor:
            theme.colorScheme == 'light'
                ? theme.colors.gray[1]
                : theme.colors.dark[6],
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}))

export default GuestLayout
