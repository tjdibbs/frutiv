import React from "react";
import {
  Box,
  Chip,
  IconButton,
  List,
  ListItemText,
  Stack,
  Typography,
  useTheme,
  Link,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box bgcolor={theme.palette.primary.main} className={"footer-container"}>
      <Box className="footer-wrapper" p={3} pt={"6em"}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { sm: "flex-start", md: "space-around" },
            gap: 5,
            [theme.breakpoints.down(600)]: {
              flexDirection: "column",
            },
          }}
        >
          <Box className="brief-about" maxWidth={400}>
            <Box className="logo-container">
              <img
                src="/images/frutiv-logo1.png"
                alt=""
                width={50}
                height={50}
              />
              <Typography variant={"h6"} color={"info"} fontWeight={800}>
                FRUTIV TECH
              </Typography>
            </Box>
            <Typography
              textAlign={"left"}
              variant={"subtitle2"}
              color={"#E5E5E5"}
            >
              We’re transparent about our methods, our pricing, and our
              deliverables. The best part? You get the peace of mind that we
              will bend over backwards to do whatever it takes to grow your
              business.
            </Typography>
          </Box>
          <Box
            className="bottom-nav"
            sx={{
              maxWidth: "100%",
              width: 300,
              [theme.breakpoints.down(550)]: {
                width: 500,
              },
            }}
          >
            <List
              sx={{ width: "100%", color: "#fff", bgcolor: "transparent" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              {links.map((link) => {
                return (
                  <NavLink
                    key={link.title}
                    to={link.url}
                    style={{
                      color: "#fff",
                      display: "block",
                      textDecoration: "none",
                      marginBottom: "1em",
                    }}
                  >
                    <ListItemText primary={link.title} />
                  </NavLink>
                );
              })}
            </List>
          </Box>
          <Box className="contact-us">
            <Typography mb={2} variant={"subtitle1"} color={"#fff"}>
              Contact Us
            </Typography>
            <Box className="phone" mb={2}>
              <Typography variant={"caption"} color={"#E5E5E5"}>
                Phone us -{" "}
                <Link
                  sx={{ color: "#fff" }}
                  underline={"none"}
                  href="tel:+2347085830807"
                >
                  <Chip sx={{ color: "#E5E5E5" }} label={"+234-708-583-0807"} />
                </Link>
              </Typography>
            </Box>
            <Box className="email">
              <Typography variant={"caption"} color={"#E5E5E5"}>
                Email us -{" "}
                <Link underline={"none"} href="mailTo:info@frutiv.com">
                  <Chip sx={{ color: "#E5E5E5" }} label={"info@frutiv.com"} />
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "grid", placeItems: "center" }} mt={3}>
          <Box
            sx={{ display: "grid", mb: 2 }}
            className={"social-icons-container"}
          >
            <Stack direction={"row"} spacing={1}>
              <Link href={"https://facebook.com/frutivtech"}>
                <IconButton>
                  <Icon
                    icon="akar-icons:facebook-fill"
                    color={"#E5E5E5"}
                    height="18"
                  />
                </IconButton>
              </Link>
              <Link href={"https://twitter.com/FrutivT"}>
                <IconButton>
                  <Icon
                    icon="brandico:twitter-bird"
                    color={"#E5E5E5"}
                    height="18"
                  />
                </IconButton>
              </Link>
              <Link href={"https://instagram.com/frutivtech"}>
                <IconButton>
                  <Icon
                    icon="ant-design:instagram-filled"
                    color={"#E5E5E5"}
                    height="18"
                  />
                </IconButton>
              </Link>
            </Stack>
          </Box>
          <Typography variant={"subtitle2"} textAlign={"center"} color={"#fff"}>
            &copy; Copyright 2022 | All Rights Reserved - Frutiv Technology{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

const links = [
  {
    title: "About us",
    url: "/about-us",
  },
  {
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    title: "services",
    url: "/services",
  },
  {
    title: "Frutiv tech hub",
    url: "/our-hub",
  },
];
