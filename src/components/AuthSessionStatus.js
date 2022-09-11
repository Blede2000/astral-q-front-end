import { Alert } from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons'

const AuthSessionStatus = ({ status, className, ...props }) => (
    <>
        {status && (
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
                {status}
            </Alert>
        )}
    </>
)

export default AuthSessionStatus
