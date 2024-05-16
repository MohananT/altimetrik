import { Grid, useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";
import { Container, GridItem } from '@chakra-ui/react'
import Header from "./Header";
import Sidebar from "./Sidebar";
import ExistingCustomerContainer from "../containers/ExistingCustomerContainer";
import Registration from "../containers/RegistrationContainer";
import { Route, Routes } from "react-router-dom";
import CustomerContainer from "../containers/CustomerContainer";

export function Root() {
    const { colorMode, toggleColorMode } = useColorMode();
    useEffect(() => {
        toggleColorMode()
    }, [])

    return (
        <div>
            <Container maxW='100vw'>
                <Grid h='8vh'
                    // backgroundColor='gray.900'
                    templateRows='repeat(1, 1fr)'
                >
                    <GridItem>
                        <Header />
                    </GridItem>
                </Grid>
                <Grid

                    h='92vh'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={4}
                >
                    <GridItem rowSpan={2} colSpan={1}>
                        <Sidebar />
                    </GridItem>
                    <GridItem colSpan={4} rowSpan={2}>
                        <Routes>
                            <Route
                                path="/"
                                element={<CustomerContainer />}
                            ></Route>
                            <Route
                                path="/registration"
                                element={<Registration />}
                            ></Route>
                            <Route
                                path="/customer"
                                element={<ExistingCustomerContainer />}
                            ></Route>
                        </Routes>
                    </GridItem>
                </Grid>
            </Container>

        </div>
    )

}

export default Root;