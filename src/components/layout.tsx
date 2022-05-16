import React from "react";
import {ThemeProvider, Container, CssBaseline} from "@mui/material";
import theme from "../lib/theme";
import Header from "./header";
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../lib/createEmotionCache';

const cache = createEmotionCache();

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = (props): JSX.Element =>{
    return(
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Container>
                    {props.children}
                </Container>
            </ThemeProvider>
        </CacheProvider>
    )
}


export default Layout;