import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  SwipeableDrawer,
  Toolbar,
  useTheme,
  Container,
} from "@mui/material";
import { Icon } from "@iconify/react";
import links, { icons } from "./links";
import { NavLink } from "react-router-dom";

const Index: React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState<boolean>(false);

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <AppBar position={"sticky"} color={"transparent"} className={"page-header"}>
      <Container maxWidth="xl" sx={{ p: 0 }}>
        <Toolbar
          className={"top-header"}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <NavLink to={"/"}>
            <Box className={"logo-container"} sx={{ px: 1 }}>
              <img
                height={40}
                width={40}
                src={"/images/frutiv-logo1.png"}
                alt="Frutiv logo"
              />
            </Box>
          </NavLink>
          <Box sx={{ display: "grid" }} className={"social-icons-container"}>
            <Stack direction={"row"} spacing={1}>
              <IconButton>
                <Icon
                  icon="akar-icons:facebook-fill"
                  color={"#9C9130"}
                  height="24"
                />
              </IconButton>
              <IconButton>
                <Icon
                  icon="brandico:twitter-bird"
                  color={"#9C9130"}
                  height="20"
                />
              </IconButton>
              <IconButton>
                <Icon
                  icon="ant-design:instagram-filled"
                  color={"#9C9130"}
                  height="24"
                />
              </IconButton>
            </Stack>
          </Box>
          <Box className={"phone-icon"}>
            <IconButton
              sx={{
                color: theme.palette.primary.light,
                boxShadow: theme.shadows[15],
              }}
            >
              <Icon
                icon="ant-design:phone-filled"
                color={"#F06908"}
                height="30"
              />
            </IconButton>
          </Box>
          <IconButton
            sx={{ display: "none" }}
            className={"menu-toggler"}
            onClick={() => setOpen(!open)}
          >
            <Icon
              icon="heroicons-solid:menu-alt-3"
              color="#545454"
              height="24"
            />
          </IconButton>
        </Toolbar>
      </Container>
      <Toolbar
        className={"bottom-header"}
        sx={{
          justifyContent: "center",
          columnGap: 3,
          flexWrap: "nowrap",
          width: "100%",
          overflowX: "auto",
          //   bgcolor: theme.palette.primary.light,
          minHeight: "50px!important",
        }}
      >
        {links.map((link, index) => {
          let url = "/" + link.replace(" ", "-").toLocaleLowerCase();
          const applyStyle = ({ isActive }: { isActive: boolean }) =>
            isActive ? "link active" : "link";

          return (
            <NavLink
              to={link === "Home" ? "/" : url}
              key={index}
              className={applyStyle}
              style={{ minWidth: "max-content" }}
            >
              {link}
            </NavLink>
          );
        })}
      </Toolbar>
      <SwipeableDrawer
        anchor={"right"}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Box
          className={"navigation-bar"}
          sx={{
            width: 300,
            maxWidth: "100vw",
            background: "rgba(188, 191, 22, .19)!important",
            height: "100%",
          }}
        >
          <Box sx={{ py: 2, bgcolor: "#fff" }}>
            <Toolbar
              sx={{ alignItems: "center", justifyContent: "space-between" }}
            >
              <Box sx={{ display: "grid" }}>
                <Stack direction={"row"} spacing={1}>
                  <IconButton>
                    <Icon
                      icon="akar-icons:facebook-fill"
                      color={"#9C9130"}
                      height="24"
                    />
                  </IconButton>
                  <IconButton>
                    <Icon
                      icon="brandico:twitter-bird"
                      color={"#9C9130"}
                      height="20"
                    />
                  </IconButton>
                  <IconButton>
                    <Icon
                      icon="ant-design:instagram-filled"
                      color={"#9C9130"}
                      height="24"
                    />
                  </IconButton>
                </Stack>
              </Box>
              <Box>
                <IconButton
                  sx={{
                    color: theme.palette.primary.light,
                    boxShadow: theme.shadows[15],
                  }}
                >
                  <Icon
                    icon="ant-design:phone-filled"
                    color={"#F06908"}
                    height="30"
                  />
                </IconButton>
              </Box>
            </Toolbar>
          </Box>
          <Box
            className={"navigation-container"}
            // sx={{ bgcolor: theme.palette.primary.light }}
          >
            <List>
              {links.map((link, index) => {
                let url = "/" + link.replace(" ", "-").toLocaleLowerCase();
                const applyStyle = ({ isActive }: { isActive: boolean }) => {
                  console.log({ isActive });
                  return isActive
                    ? {
                        textDecoration: "none",
                        display: "block",
                        backgroundColor: "#ffffff",
                      }
                    : { textDecoration: "none" };
                };
                return (
                  <NavLink
                    to={link === "Home" ? "/" : url}
                    key={index}
                    style={applyStyle}
                    onClick={() => setOpen(false)}
                  >
                    <ListItem key={link} disablePadding>
                      <ListItemButton>
                        <ListItemIcon>
                          <Icon
                            icon={icons[link.toLocaleLowerCase()]}
                            color={theme.palette.primary.main}
                            height="24"
                          />
                        </ListItemIcon>
                        <ListItemText
                          sx={{ color: theme.palette.primary.main }}
                          primary={link}
                        />
                      </ListItemButton>
                    </ListItem>
                  </NavLink>
                );
              })}
            </List>
          </Box>
        </Box>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default Index;
