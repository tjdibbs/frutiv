import React from "react";
import {AppBar, Box, IconButton, Stack, Toolbar, useTheme} from "@mui/material";
import {Icon} from "@iconify/react";
import links from "../lib/links"
import {NavLink} from "react-router-dom";

const Header: React.FC = ()=>{
    const theme = useTheme();
    return(
        <AppBar position={"static"} color={"transparent"} className={"page-header"}>
            <Toolbar sx={{alignItems: "center", justifyContent: "space-between"}}>
                <NavLink to={"/"}>
                    <Box className={"logo-container"}>
                        <img height={"50px"} src={"/frutiv-logo.png"} alt="Frutiv logo"/>
                    </Box>
                </NavLink>
                <Box sx={{display: "grid"}}>
                    <Stack direction={"row"} spacing={1}>
                        <IconButton>
                            <Icon icon="akar-icons:facebook-fill" color={"#9C9130"} height="24" />
                        </IconButton>
                        <IconButton>
                            <Icon icon="brandico:twitter-bird" color={"#9C9130"} height="20" />
                        </IconButton>
                        <IconButton>
                            <Icon icon="ant-design:instagram-filled" color={"#9C9130"} height="24" />
                        </IconButton>
                    </Stack>
                </Box>
                <Box>
                    <IconButton  sx={{color: theme.palette.primary.light, boxShadow: theme.shadows[15]}}>
                        <Icon icon="ant-design:phone-filled" color={"#F06908"} height="30" />
                    </IconButton>
                </Box>
            </Toolbar>
            <Toolbar sx={{justifyContent: "space-between", bgcolor: theme.palette.primary.light, minHeight: "50px!important"}}>
                {
                    links.map((link, index)=>{
                        let url = "/"+link.replace(" ","-").toLocaleLowerCase()
                        const applyStyle = ({isActive}: {isActive: boolean}) => isActive ? "link active" : "link"

                        return(
                            <NavLink to={url} key={index} className={applyStyle}>
                                {link}
                            </NavLink>
                        )
                    })
                }
            </Toolbar>
        </AppBar>
    )
}

export default Header;