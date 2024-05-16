import { Box, Button, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export default function Sidebar() {
    return (
        <Box p={5}>
            <VStack
                spacing={4}
                align='stretch'
            >
                <Button colorScheme='teal' size='sm'>
                    <Link to="/">Home</Link>
                </Button>
                <Button colorScheme='teal' size='sm'>
                    <Link to="/registration">New Registration</Link>
                </Button>
                <Button colorScheme='teal' size='sm'>
                    <Link to="/customer">Existing Customer</Link>
                </Button>
            </VStack>


        </Box >
    )
}