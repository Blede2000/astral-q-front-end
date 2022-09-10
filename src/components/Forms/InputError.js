import { Text } from '@mantine/core'

const InputError = ({ messages = [] }) => (
    <>
        {messages.length > 0 && (
            <>
                {messages.map((message, index) => (
                    <Text key={index} color="red">
                        {message}
                    </Text>
                ))}
            </>
        )}
    </>
)

export default InputError
