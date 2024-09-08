import { Box, Container, Stack } from "@mui/material";
import SideNavigateBar from "../components/SideNavigateBar.js/SideNavigateBar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return(
        <Container component={"main"}>
            <Stack direction={"row"}>
                <Box id="side-navigate-bar">
                    <SideNavigateBar/>
                </Box>
                <Box id="content-wrapper">
                    <Outlet/>
                </Box>
            </Stack>
        </Container>
    )
}