import React from "react";
import { ThemeProvider, Box, CssBaseline } from "@mui/material";
import theme from "../lib/theme";
import Header from "./header/index";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../lib/createEmotionCache";
import ScrollToTop from "./scrollToTop";

const cache = createEmotionCache();

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props): JSX.Element => {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Box className={"container"}>{props.children}</Box>
        <ScrollToTop />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Layout;
