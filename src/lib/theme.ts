import {createTheme} from "@mui/material";

const theme =  createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#9C9130",
            light: "#9C9130",
            dark: ""
        },
        secondary:{
            main: "#F06908"
        },
        info: {
            main: "#F0AF08"
        },
        text:{
            primary: "rgba(51,51,51,88%)",
            secondary: "#33333388"
        },
    },
    typography: {
        fontFamily: "Nunito, 'Segoe UI'"
    },
    shape: {
        borderRadius: 10
    }
})

export default theme;
